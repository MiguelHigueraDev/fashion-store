import { useState } from 'react'
import Cart from './Cart'
import Header from './Header'
import { PropTypes } from 'prop-types'

const Main = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [products, setProducts] = useState([])

  const toggleCart = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="">
        <Cart isOpen={isOpen} toggleCart={toggleCart} products={products} />
        <div className="py-4 px-5">
          <Header isCartOpen={isOpen} toggleCart={toggleCart} />
          {children}
        </div>
    </div>
  )
}

Main.propTypes = {
    children: PropTypes.any
}

export default Main