import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';


const Home = () => {
    const categories = useLoaderData()
  
    
    return (
       <div className='w-11/12 mx-auto'>
            <Heading title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}/>
            <Banner/>
            <div className='w-full mx-auto  justify-center flex text-4xl mt-4'>Explore Cutting-Edge Gadgets</div>
           <div className=''>
           <Categories categories={categories}/>
           </div>
            
          
           
            
       </div>
    );
};

export default Home;