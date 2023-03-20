import React from 'react'
import WebDev from '../assets/WebDev.jpg'

const Analytics = () => {
  return (
    <div className='flex w-full bg-white py-16 px-4'>
        <div className=' max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className=' w-[350px] my-4 mx-auto' src = {WebDev} alt ='/' />
        <div className='flex flex-col justify-center'>
            <p className='font-bold text-[#00df9a]'>Sleek Websites</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>One Platform For All Your Website</h1>
            <p className='p-1'>Are you looking for expert web development services to build a sleek and powerful website?
             Our team of experienced developers can help you create a custom website that meets your unique needs and objectives.
             we have the skills and expertise to deliver a high-quality website that is optimized for speed, security, and user experience.
            </p>
               <button className='md:mx-0 text-white font-bold hover: cursor-pointer rounded w-[200px] bg-black py-2 px-5 my-6 mx-auto '>Get Started</button>

        </div>
        </div>
    </div>
  )
}

export default Analytics
