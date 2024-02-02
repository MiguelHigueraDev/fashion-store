import { useContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types'
import Loading from "./Loading";
import Error from "./Error";
import { ShopContext } from "../Router";

const ProductContainer = ({ productId }) => {
  const { addToCart } = useContext(ShopContext);
  const [productObj, setProductObj] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (e) => {
    setQuantity(e.target.value)
  }

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProductObj(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) return <Loading />
  if (error) return <Error message={'Product not found'}/>

  return (
    <div className="max-w-800px mx-auto mt-[80px] md:mt-0 md:h-[90vh] flex flex-col md:flex-row gap-10 items-center justify-center">
        <img src={productObj.image} width={"200px"} height={"200px"} className="" />
        <div className="max-w-[500px] space-y-4 flex justify-center align-center flex-col">
            <h3 className="font-bold text-2xl">{productObj.title}</h3>
            <p className="text-lg font-normal text-gray-600">{productObj.description}</p>
            <div className="flex gap-3 items-end">
              <input type="number" min="1" className="border-2 border-gray-300 h-10 w-[70px] p-2" value={quantity} onInput={handleInputChange}/>
              <button className="self-start btn" onClick={() => addToCart(productObj, quantity)}>Add to cart</button>
            </div>
        </div>
    </div>
  )
};
ProductContainer.propTypes = {
    productId: PropTypes.string
}
export default ProductContainer;
