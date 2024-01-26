import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="mt-2 relative">
        <nav className="flex gap-3 justify-between text-xl z-5">
            <ul className="flex gap-3">
                <li className="hover:underline decoration-black underline-offset-4"><Link to="/category/women">Women</Link></li>
                <li className="hover:underline decoration-black underline-offset-4"><Link to="/category/men">Men</Link></li>
                <li className="hover:underline decoration-black underline-offset-4"><Link to="/category/jewelry">Jewelry</Link></li>
            </ul>
            <div className="">
                <Link className="hover:underline decoration-black underline-offset-4" to="/cart">Cart</Link>
            </div>
            <Link to="/" className="logo absolute left-[50%] m-0 w-30 top-0 z-10 block uppercase tracking-[5px] font-bold text-4xl flex-grow select-none">Svelte</Link>
        </nav>
    </header>
  )
}

export default Header