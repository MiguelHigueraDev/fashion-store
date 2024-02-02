import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="w-full mt-5">
        <Link to="/category/women" className="flex justify-center items-center h-[70vh] p-4 cursor-pointer bg-cover text-5xl md:text-7xl focus:underline hover:underline outline-white hero-bg decoration-white decoration-2 underline-offset-8 duration-200 transition-all">
            <h2 className="text-white font-normal drop-shadow-lg mx-auto text-center select-none"> &apos;24 Winter Collection</h2>
        </Link>
    </div> 
  )
}

export default Hero