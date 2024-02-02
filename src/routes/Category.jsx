import Main from "../components/Main"
import { useParams } from 'react-router-dom'
import NotFound from "../components/NotFound"
import { categoryRoutes } from "../constants/category_routes"
import ProductContainer from "../components/ProductContainer"

const Category = () => {
  const { category } = useParams()
  return (
    <Main>

    {category === 'men' ? (
      <ProductContainer categoryUrl={categoryRoutes.men} />
    ): category === 'women' ? (
      <ProductContainer categoryUrl={categoryRoutes.women} />
    ): category === 'jewelry' ? (
      <ProductContainer categoryUrl={categoryRoutes.jewelry} />
    ): (
      <NotFound />
    )}
    </Main>
    
  )
}

export default Category