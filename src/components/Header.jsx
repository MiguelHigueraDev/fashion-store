import { Link } from "react-router-dom"
import { PropTypes } from 'prop-types'

const Header = ({isCartOpen, toggleCart}) => {
  return (
    <header className="relative">
        <nav className="flex gap-3 justify-between text-xl z-5">
            <ul className="flex gap-3">
                <li className="hover:underline decoration-black underline-offset-4"><Link to="/category/women">Women</Link></li>
                <li className="hover:underline decoration-black underline-offset-4"><Link to="/category/men">Men</Link></li>
                <li className="hover:underline decoration-black underline-offset-4"><Link to="/category/jewelry">Jewelry</Link></li>
            </ul>
            <div className="">
                <button type="button" onClick={toggleCart} className="hover:underline decoration-black underline-offset-4">Cart</button>
            </div>
            <Link to="/" className="logo m-0 w-30 uppercase tracking-[5px] font-bold text-4xl flex-grow select-none">Svelte</Link>
        </nav>
    </header>
  )
}

Header.propTypes = {
  isCartOpen: PropTypes.bool,
  toggleCart: PropTypes.func
}

export default Header