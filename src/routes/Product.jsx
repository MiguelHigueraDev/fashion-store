import Main from "../components/Main"
import { useParams } from 'react-router-dom'
import ProductContainer from "../components/ProductContainer";

const Product = () => {
  const { product } = useParams()

  return (
    <Main>
        <ProductContainer productId={product} />
    </Main>
  )
}

export default Product