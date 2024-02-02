import { useState } from 'react'
import Cart from './Cart'
import Header from './Header'
import { PropTypes } from 'prop-types'
import SideMenu from './SideMenu'

const Main = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  return (
    <>
        <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
        <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="py-4 px-5">
          <Header isCartOpen={isCartOpen} toggleCart={toggleCart} toggleMenu={toggleMenu} />
            {children}
        </div>
    </>
  )
}

Main.propTypes = {
    children: PropTypes.any
}

export default Main