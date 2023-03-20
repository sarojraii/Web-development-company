import React from 'react';
import Data from './Data';

export default function Cards() {
  return (
    
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8'>
        {Data.map((item, index) => (
          <div key={index} className=' w-full shadow-2xl flex flex-col p-4 md:my-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-100'>
            <h1 className ='text-3xl w-20 mx-auto mt-[-2.2rem]'>${item.price}</h1>
            <div className='text-center py-2 border-b'>
              <h2 className='font-bold text-2xl'>{item.hero}</h2>
              <p>{item.about}</p>
              <p>{item.section}</p>
              <p>{item.FAQ}</p>
              <p>{item.login}</p>
            </div>
            <div className='mx-auto'>
            <button className='bg-green-200 rounded w-[150px] hover:bg-green-400 py-1  mt-5'>{item.button}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

