import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Router'
import { useContext } from 'react'
const Product = ({ product }) => {
  const { addToCart } = useContext(ShopContext)
  const { title, image, price, id } = product
  return (
    <article className="border-black border-1 text-center space-y-3">
      <img src={image} alt={title} width="300px" height="300px" className="object-scale-down w-[300px] h-[300px] mx-auto" />
      <div className="flex gap-2 flex-col">
        <p className="text-lg w-[70%] mx-auto">{title}</p>
        <p className="text-xl font-bold">${price}</p>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <button onClick={() => addToCart(product)} className="btn">Add to cart</button>
        <Link to={`/product/${id}`} className="btn">Details</Link>
      </div>
    </article>
  )
}

Product.propTypes = {
  product: PropTypes.object
}

export default Product