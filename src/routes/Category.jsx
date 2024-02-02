import Main from "../components/Main"
import { useParams } from 'react-router-dom'
import NotFound from "../components/NotFound"
import { categoryRoutes } from "../constants/category_routes"
import CategoryContainer from "../components/CategoryContainer"

const Category = () => {
  const { category } = useParams()
  return (
    <Main>

    {category === 'men' ? (
      <CategoryContainer categoryUrl={categoryRoutes.men} />
    ): category === 'women' ? (
      <CategoryContainer categoryUrl={categoryRoutes.women} />
    ): category === 'jewelry' ? (
      <CategoryContainer categoryUrl={categoryRoutes.jewelry} />
    ): (
      <NotFound />
    )}
    </Main>
    
  )
}

export default Category