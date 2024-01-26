import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="">
        <nav className="flex gap-3 justify-between text-xl z-5">
            <ul className="flex gap-3">
                <li className="hover:underline decoration-black underline-offset-4"><Link to="/category/women">Women</Link></li>
                <li className="hover:underline decoration-black underline-offset-4"><Link to="/category/men">Men</Link></li>
                <li className="hover:underline decoration-black underline-offset-4"><Link to="/category/jewelry">Jewelry</Link></li>
            </ul>
            <div className="">
                <Link className="hover:underline decoration-black underline-offset-4" to="/cart">Cart</Link>
            </div>
        </nav>
        <div className="absolute left-0 right-0 top-4 z-[-99]">
            <Link to="/" className="block uppercase tracking-[5px] font-bold text-4xl flex-grow text-center select-none">Svelte</Link>
        </div>
    </header>
  )
}

export default Header