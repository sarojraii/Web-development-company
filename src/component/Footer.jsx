import React from 'react'
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,

} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='max-w-[1240px] py-16 px-4 mx-auto grid lg:grid-cols-3 gap-8'>
      <div>
        <h1 className = ' w-full font-bold text-3xl text-[#00df9a] '>ASTITWA.</h1>
        <p className='text-white py-4 '>
             Our team of experienced developers can help you create a custom website that meets your unique needs and objectives.
        </p>
        <div className='text-white flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare className='cursor-pointer' size={30}/>
            <FaInstagram className='cursor-pointer' size={30}/>
            <FaGithubSquare className='cursor-pointer' size={30}/>
            <FaTwitterSquare className='cursor-pointer' size={30}/>
        </div>
        </div>
        <div className='lg:col-span-2 text-white flex justify-between mt-6'>
        <div>
            <h3 className='font-bold'>Company</h3>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold'>Services</h3>
                <ul>
                    <li className='py-2 text-sm'>Web Development</li>
                    <li className='py-2 text-sm'>Mobile Development</li>
                    <li className='py-2 text-sm'>QA</li>
                </ul>
            </div>
            <div>
            <h3 className='font-bold'>Hire Resources</h3>
                <ul>
                    <li className='py-2 text-sm'>Hire Developer</li>
                    <li className='py-2 text-sm'>Hire .NET Development</li>
                    <li className='py-2 text-sm'>Hire UI/UX Development</li>
                </ul>
            </div>
            <div>
            <h3 className='font-bold'>Legal</h3>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
            </div>
        </div>
      </div>
  )
}
