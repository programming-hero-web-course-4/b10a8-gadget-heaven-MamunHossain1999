import React from 'react'

export default function Heading({title, subtitle}) {
  return (
    <div className='w-full mx-auto px- text-center bg-purple-600 pb-16 -m-12'>
         <div className='flex flex-col w-full justify-center items-center my-12'>
             
            <h1 className='lg:w-[1120px] text-white text-xl md:text-2xl lg:text-6xl  mb-4'>{title}</h1>
            <p className='lg:w-[795px] text-xs md:text-xl lg:text-2xl text-gray-200 font-thin'>{subtitle}</p>
            <button className='btn bg-white mt-10 rounded-3xl'>Shop Now</button>
           
         </div>
    </div>
  )
}
