import React, { useEffect, useState } from 'react';
import { Outlet, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';


export default function AllProduct() {
   
    const data = useLoaderData();
    console.log(data)
    const { category } = useParams();
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        if (category) {
            const filteredByCategory = data.filter(product => product.category === category);
            setProducts(filteredByCategory);
        } else {
            setProducts(data.slice(0, 6));
        }
    }, [category, data]);
   

    return (
         <div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-4'>
              {products.map(product => (
                     <Card key={product.id} product={product} /> 
                    
                 ))}
            </div>
             
            
         </div> 
         
    );
}
