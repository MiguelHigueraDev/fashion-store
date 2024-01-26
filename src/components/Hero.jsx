import React from 'react'
import image from '/collection.jpg'

const Hero = () => {
  return (
    <div className="w-full mt-5">
        <a className="flex justify-center items-center h-[70vh] cursor-pointer bg-cover text-7xl focus:underline hover:underline outline-white hero-a decoration-white decoration-2 underline-offset-8 duration-200 transition-all" style={{backgroundImage: `url(${image})`}} >
            <h2 className="text-white font-normal drop-shadow-lg mx-auto text-center select-none"> &apos;24 Summer Collection</h2>
        </a>
    </div> 
  )
}

export default Hero