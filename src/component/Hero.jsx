import React from 'react';
import Typed from 'react-typed';


export default function Hero() {
  return (
    <div className=' text-white'>
        <div className='max-w-[800px] mt-[-90px] w-full h-screen mx-auto text-center flex flex-col '>
            <p className='text-[#00df9a] mt-[200px] font-bold p-2'>WE TURN YOUR VISION INTO A POWERFUL WEBSITE</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 '>Advance your website with us</h1>
            
            <div className='flex justify-center'>
                <p className='md:text-4xl sm:text-3xl font-bold text-xl'>Getting Fast & Flexible with</p>
                <Typed className='md:text-4xl sm:text-3xl font-bold text-xl text-gray-400 pl-2'
                  strings = {['HTML','CSS','JavaScript','Tailwind','ReactJS']}
                  typeSpeed = {120}
                  backSpeed = {140}
                loop
                />
            </div>
            <div>
                <button className=' text-black font-bold hover: cursor-pointer rounded  bg-[#00df9a] mt-3 py-2 px-5 mx-auto '>Get Started</button>
            </div>
        </div>
    </div>
  )
}
