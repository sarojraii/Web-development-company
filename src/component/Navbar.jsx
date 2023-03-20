import React from 'react';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate('/');
  };

  const handleClickAbout = () => {
    navigate('/about');
  };

  const handleClickContact = () => {
    navigate('/contact');
  };

  const handleClickService = () => {
    navigate('/service');
  };

  return (
    <div className='flex justify-between items-center mx-auto px-4 max-w-[1240px] text-white'>
      <h1 className='font-bold text-3xl text-[#00df9a] ml-3'>ASTITWA.</h1>
      <ul className='md:flex hidden'>
        <li className='p-4 cursor-pointer hover:text-[#00df9a]'>
          <button onClick={handleClickHome}>Home</button>
        </li>
        <li className='p-4 cursor-pointer hover:text-[#00df9a]'>
          <button onClick={handleClickAbout}>About</button>
        </li>
        <li className='p-4 cursor-pointer hover:text-[#00df9a]'>
          <button onClick={handleClickContact}>Contact</button>
        </li>
        <li className='p-4 cursor-pointer hover:text-[#00df9a]'>
          <button onClick={handleClickService}>Service</button>
        </li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} className='m-4' /> : <AiOutlineMenu size={20} className='m-4' />}
      </div>
      <div className={nav ? 'm-2 ml-4 fixed left-0 top-0 w-[60%] h-full border-gray-900 bg-[#0D1F48] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='font-bold text-3xl text-[#00df9a] ml-3'>REACT.</h1>
        <ul className='pt-12 uppercase'>
          <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'>
            <button onClick={handleClickHome}>Home</button>
          </li>
          <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'>
            <button onClick={handleClickAbout}>About</button>
          </li>
          <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'>
            <button onClick={handleClickContact}>Contact</button>
          </li>
          <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'>
            <button onClick={handleClickService}>Service</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
