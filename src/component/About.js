import React from 'react'
import css3 from '../assets/css3.png'
import HTML from '../assets/HTML.png'
import JavaScript from '../assets/JavaScript.png'
import ReactJS from '../assets/ReactJS.png'
import tailwind from '../assets/tailwind.png'

const About = () => {
  return (
      <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='bg-white p-[100px] mx-auto grid grid-cols-2 lg:mx-auto sm:grid-cols-3 md:grid-cols-5 gap-12 '>
          <img className='w-[100px] mt-1 text-center' src= {HTML} alt='/'/>
          <img className='w-[100px] mt-1 text-center' src= {css3} alt='/'/>
          <img className='w-[80px] mt-3 text-center' src= {JavaScript} alt='/'/>
          <img className='w-[80px] mt-3 text-center' src= {ReactJS} alt='/'/>
          <img className='w-[80px] mt-3 text-center' src= {tailwind} alt='/'/>
        </div>
        </div>
  )
}

export default About
