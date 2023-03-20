import React from 'react'

export default function Newsletter() {
  return (
    
      <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
             <div className = 'lg:col-span-2'>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl py-2'>Want to optimize your flow?</h1>
                <p>Sign up and stay updated. </p>
            </div>
            <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex rounded-md text-black w-full' type='email' placeholder='Enter Email' />
                <button className=' sm:flex-row text-black font-medium w-[200px] hover:cursor-pointer rounded-md bg-[#00df9a] mt-3 py-2 my-3 ml-4'>Notify Me</button>
            </div>
            <p>Your website's success is our top priority. <br></br>Read our<span className='text-[#00df9a]'>Privacy Policy.</span> </p>
            </div>
        </div>
      </div>
  )
}
