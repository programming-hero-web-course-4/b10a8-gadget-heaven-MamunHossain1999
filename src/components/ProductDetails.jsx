import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const data = useLoaderData(); 
    console.log(data)
    const { id } = useParams();   
    console.log(id)
    

    const [product, setProduct] = useState({});
    // console.log(product)

    useEffect(() => {
        const singleProduct = data.find(product => product.id === parseInt(id));
        setProduct(singleProduct);
    }, [data, id]);

   
    const {product_id, product_title, product_image, category, price, description, availability, rating } = product || {};

    return (
        <div className="w-1/4 transition hover:scale-105 card bg-base-100 mx-auto shadow-xl mt-3">
            <figure>
                <img className='flex-grow rounded-lg' src={product_image || 'default_image.jpg'} alt="Product" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product_title || "Unknown Product"}
                </h2>
                <p>{category || "Unknown Category"}</p>
                <p>${price || "Not Available"}</p>
                <p>Rating: {rating || "N/A"}</p>
                <div className="card-actions justify-end">
                    {/* Extra actions or buttons can go here */}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
