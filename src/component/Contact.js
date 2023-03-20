import React from 'react'
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,

} from 'react-icons/fa';

export default function Contact() {
  return (
    <div className='w-full mx-auto py-10 sm:py-14 bg-white'>
      <div className='grid lg:grid-cols-2 gap-8 md:max-w-[900px] sm:max-w-[450px] mx-auto'>
        <div className='h-[80vh] p-8 shadow-xl'>
          <h1 className='font-bold text-3xl mb-4'>
            Contact Us
          </h1>
          <p>
            Contact us today to learn more about how we can help you achieve your web development goals.
            We look forward to hearing from you!
          </p>
          <div className='mt-8 space-y-4'>
            <span className='border py-2 px-4 rounded '>Email</span>
            <span className='border py-2 px-4 rounded '>LinkedIn</span>
            <span className='border py-2 px-4 rounded '>GitHub</span>
          </div>
          <div className='text-white flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare  size={30}/>
            <FaInstagram  size={30}/>
            <FaGithubSquare  size={30}/>
            <FaTwitterSquare  size={30}/>
        </div>
        </div>
        <div className='h-[80vh] p-8 shadow-xl'>
          <h1 className='font-bold text-3xl mb-4'>
            Form
          </h1>
          <label className='block mb-2'>Full Name</label>
          <input type='text' placeholder='Enter Name' className='block w-full border rounded py-2 px-4 mb-4' />
          <label className='block mb-2'>Email</label>
          <input type='email' placeholder='Enter Email' className='block w-full border rounded py-2 px-4 mb-4' />
          <label className='block mb-2'>Message</label>
          <textarea placeholder='Enter Message' className='block w-full border rounded py-2 px-4'></textarea>
          <button className='md:mx-0 text-white font-bold hover: cursor-pointer rounded w-[200px] bg-black py-2 px-5 my-6 mx-auto '>Submit</button>
        </div>
      </div>
    </div>
  )
}
