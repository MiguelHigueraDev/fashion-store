import { useState } from 'react'
import Cart from './Cart'
import Header from './Header'
import { PropTypes } from 'prop-types'

const Main = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCart = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="py-2 px-5 my-2">
        <Header isCartOpen={isOpen} toggleCart={toggleCart} />
        <Cart isOpen={isOpen} />
        {children}
    </div>
  )
}

Main.propTypes = {
    children: PropTypes.any
}

export default Main