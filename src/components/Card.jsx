import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ product }) {
    const { product_id, product_title, product_image, category, price, rating } = product || {};

    return (
        <div className="transition hover:scale-105 card bg-base-100 mx-auto shadow-xl mt-3">
            <figure>
                <img 
                    className='flex-grow w-11/12 h-72 rounded-lg' 
                    src={product_image || 'default_image.jpg'} 
                    alt={product_title || "Product"} 
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title || "Unknown Product"}</h2>
                <p>{category || ""}</p>
                <p>${price || ""}</p>
                <p>Rating: {rating || "N/A"}</p>
                <div className="card-actions justify-end">
                    <Link to={`/product/${product_id}`}>
                        <button className='btn border-purple-700 text-purple-500 rounded-3xl'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
