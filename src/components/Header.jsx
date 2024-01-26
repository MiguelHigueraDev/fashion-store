import React from 'react'

const Header = () => {
  return (
    <header className="">
        <nav className="flex gap-3 justify-between text-xl z-5">
            <ul className="flex gap-3">
                <li className="hover:underline decoration-black underline-offset-4"><a href="#">Women</a></li>
                <li className="hover:underline decoration-black underline-offset-4"><a href="#">Men</a></li>
                <li className="hover:underline decoration-black underline-offset-4"><a href="#">Jewelry</a></li>
            </ul>
            <div className="">
                <a className="hover:underline decoration-black underline-offset-4" href="#">Cart</a>
            </div>
        </nav>
        <div className="absolute left-0 right-0 top-4 z-[-99]">
            <h1 className="uppercase tracking-[5px] font-bold text-4xl flex-grow text-center select-none">Svelte</h1>
        </div>
    </header>
  )
}

export default Header