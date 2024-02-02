import { PropTypes } from 'prop-types'
import { useEffect, useState } from 'react';
import Product from './Product';
import Loading from './Loading';
import Error from './Error';
const ProductContainer = ({ categoryUrl }) => {

  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch(categoryUrl)
    .then((response) => response.json())
    .then((data) => {
      setProducts(data)
    })
    .catch((error) => setError(error.message))
    .finally(() => setLoading(false))
  }, [categoryUrl])

  if (loading) return <Loading />
  if (error) return <Error message={error} />

  return (
    <main className="max-w-[1800px] mx-auto mt-[100px] grid grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:grid-rows-2 gap-10 place-content-center items-center justify-center justify-items-center">
    {products.map((product) => (
      <Product key={product.id} title={product.title} 
      description={product.description} image={product.image} 
      price={product.price} rating={product.rating} />
    ))}
    </main>
  )
}

ProductContainer.propTypes = {
  categoryUrl: PropTypes.string
}

export default ProductContainer