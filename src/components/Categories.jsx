import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'; 

const Categories = ({categories ,product}) => {
    // console.log(categories)
    console.log(product)
    return ( 
        <div className='w-11/12 flex mx-auto gap-2 flex-row mb-6'>
            
            <div role="tablist" className="w-1/4 space-y-4 border mt-20  border-gray-300">
                
                <div className=''>
                {
                    categories.map(category => (
                        <NavLink 
                            key={category.category} 
                            to={`${category.link}`} 
                            role="tab" 
                            className={({ isActive }) => `tab pt-4 text-2xl block min-h-20 rounded-md ${isActive ? 'tab-active bg-blue-200' : 'hover:bg-blue-100'}`}
                        >
                            {category.category}
                        </NavLink>
                    ))
                }
                </div>
            </div>
            
            <div className='w-3/4 p-4 mt-20 border '>
              
              <Outlet/> 
            
            </div>
        </div>
       
    );
};

export default Categories;