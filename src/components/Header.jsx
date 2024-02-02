import { Link } from "react-router-dom"
import { PropTypes } from 'prop-types'
import { useContext } from "react"
import { ShopContext } from "../Router"

const Header = ({toggleCart, toggleMenu}) => {
  const { cartItems } = useContext(ShopContext)
  return (
    <header className="relative">
        <nav className="flex gap-3 justify-between text-xl z-5">
            <ul className="hidden sm:flex gap-3">
                <li className="hover:underline decoration-black underline-offset-4"><Link to="/category/women">Women</Link></li>
                <li className="hover:underline decoration-black underline-offset-4"><Link to="/category/men">Men</Link></li>
                <li className="hover:underline decoration-black underline-offset-4"><Link to="/category/jewelry">Jewelry</Link></li>
            </ul>
            <button onClick={toggleMenu} className="flex sm:hidden"><img src='/menu.svg' className="w-6 h-6"></img></button>
            <button type="button" onClick={toggleCart} className="flex gap-1 items-center justify-center decoration-black underline-offset-4">
              <img src="/cart.svg" className="w-6 h-6 md:h-8 md:w-8"></img>
              {cartItems.length > 0 && <p className="text-md relative top-[8px] mb-2">{cartItems.length}</p>}
            </button>
            <Link to="/" className="logo-sm sm:logo m-0 w-30 uppercase tracking-[5px] font-bold text-2xl sm:text-4xl flex-grow select-none">Svelte</Link>
        </nav>
    </header>
  )
}

Header.propTypes = {
  toggleCart: PropTypes.func,
  toggleMenu: PropTypes.func,
}

export default Header