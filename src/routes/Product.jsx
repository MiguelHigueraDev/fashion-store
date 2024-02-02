import Main from "../components/Main"
import { useParams } from 'react-router-dom'
import ProductContainer from "../components/ProductContainer";
import { PropTypes } from "prop-types";


const Product = ({ addProduct }) => {
  const { product } = useParams()

  return (
    <Main>
        <ProductContainer productId={product} addProduct={addProduct} />
    </Main>
  )
}

Product.propTypes = {
    addProduct: PropTypes.func
}

export default Product