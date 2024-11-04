import React from 'react';
import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className=''>
             
               <div className='-mt-12'>
                    <img className='lg:w-4/6 w-5/6 mx-auto lg:h-[400px] border p-4  rounded-xl ' src={banner} alt="" />
               </div>
           
        </div>
    );
};

export default Banner;