import { useState } from 'react'
import Cart from './Cart'
import Header from './Header'
import { PropTypes } from 'prop-types'
import SideMenu from './SideMenu'

const Main = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [products, setProducts] = useState([])

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="">
        <Cart isOpen={isCartOpen} toggleCart={toggleCart} products={products} />
        <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="py-4 px-5">
          <Header isCartOpen={isCartOpen} toggleCart={toggleCart} toggleMenu={toggleMenu} />
          {children}
        </div>
    </div>
  )
}

Main.propTypes = {
    children: PropTypes.any
}

export default Main