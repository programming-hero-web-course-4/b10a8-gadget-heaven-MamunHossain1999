import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { GiSelfLove } from "react-icons/gi";
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { addFavorite, getAllFavorites } from "./localStore";

const ProductDetails = () => {
   
  const data = useLoaderData(); 
  const { id } = useParams(); 

  const [product, setProduct] = useState({});

  useEffect(() => {
    const singleProduct = data.find(
      (product) => product.product_id == parseInt(id)
    );
    if (singleProduct) {
      setProduct(singleProduct);
    } else {
      console.error("Product not found with id:", id);
    }
  }, [data, id]);

  const handleAddFavorite = (product)=>{
    addFavorite(product)
    
  }

  const { product_title, product_image, category, price, description, rating } =
    product || {};

  return (
    <div>
      <div className="w-11/12 mx-auto text-center bg-purple-600 pb-48">
        <h1 className="text-3xl lg:text-4xl text-white">Product Details</h1>
        <p className="text-xl lg:text-2xl w-3/6 mx-auto text-gray-400">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col -mt-40 bg-white border rounded-xl lg:flex-row">
          <img
            src={product_image || "default_image.jpg"}
            alt={product_title || "Product Image"}
            className="w-full rounded-lg shadow-2xl"
          />
          <div className="">
            <h1 className="lg:text-5xl  text-3xl font-bold">
              {product_title || "Product Title"}
            </h1>

            <p className="py-6">
              {description || "No description available for this product."}
            </p>

            <p className="text-xl">
              <strong>Category:</strong> {category || "N/A"}
            </p>
            <div className="">
              <p className="text-xl">
                <strong>Price:</strong> ${price || "N/A"}
              </p>

              <p className="text-xl">
                <strong>Rating:</strong> {rating || "N/A"} / 5
              </p>
              <div className="flex items-center ">
                    <button onClick={()=>handleAddFavorite(product)} className="w-36  mt-4 flex items-center pl-2 gap-2 border rounded-xl bg-lime-400 py-3 ">
                     Add to Cart<FiShoppingCart  />
                  
                    </button>
                    <button className="ml-3 border py-3 px-3 mt-4 rounded-lg"><GiSelfLove/></button>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
