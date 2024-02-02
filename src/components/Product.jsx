import { PropTypes } from 'prop-types'
const Product = ({ title, description, image, price, rating}) => {
  return (
    <article className="border-black border-1 text-center space-y-3">
      <img src={image} alt={title} width="300px" height="300px" className="object-scale-down w-[300px] h-[300px] mx-auto" />
      <div className="flex gap-2 flex-col">
        <p className="text-lg w-[70%] mx-auto">{title}</p>
        <p className="text-xl font-bold">${price}</p>
      </div>
    </article>
  )
}

Product.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.object
}

export default Product