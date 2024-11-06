import React from 'react';
import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='w-1/2 mx-auto rounded-2xl'>
             
               <div className='  '>
                    <img className=' w-full p-3 mx-auto lg:h-96  rounded-3xl -mt-36 border' src={banner} alt="" />
               </div>
           
        </div>
    );
};

export default Banner;