import { useEffect, useState } from "react";
import { PropTypes } from 'prop-types'
import Loading from "./Loading";
import Error from "./Error";

const ProductContainer = ({ productId }) => {
  const [productObj, setProductObj] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <div className="max-w-800px mx-auto mt-10 md:mt-0 md:h-[90vh] flex gap-10 items-center justify-center">
        <img src={productObj.image} width={"200px"} height={"200px"} className="" />
        <div className="max-w-[500px] space-y-4 flex justify-center align-center flex-col">
            <h3 className="font-bold text-2xl">{productObj.title}</h3>
            <p className="text-lg font-normal text-gray-600">{productObj.description}</p>
            <button className="mt-8 self-start btn">Add to cart</button>
        </div>
    </div>
  )
};
ProductContainer.propTypes = {
    productId: PropTypes.string
}
export default ProductContainer;
