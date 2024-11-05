import React, { useEffect, useState } from "react";
import { getAllFavorites } from "../components/localStore";
import Card from "../components/Card";
import { NavLink, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation(); // current location object
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const favorites = getAllFavorites();
    setProducts(favorites);
  }, []);

  const handleSortByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  const totalCost = products.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <div className="w-11/12 mx-auto text-center bg-purple-600 pb-36 ">
        <div>
          <h1 className="text-4xl text-white">Dashboard</h1>
          <p className="text-2xl w-4/6 text-gray-400 mx-auto mt-3">
            Explore the latest gadgets that will take your experience to the next level. 
            From smart devices to the coolest accessories, we have it all!
          </p>
        </div>
        
        <div className="lg:space-x-3 space-x-1 mt-10">
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `home ${isActive || location.pathname === "/product" ? " bg-lime-300 px-5 py-2 rounded-2xl text-black" : "hover:text-warning"}`
            }
          >
            Home
          </NavLink>
          
          <button className="border py-3 lg:px-12 space-x-2 rounded-3xl">
            Wishlist
          </button>
        </div>
      </div>

      <div className="w-11/12 mx-auto lg:flex items-center justify-between py-4 px-6 bg-gray-100 rounded-lg shadow-md mt-5">
        <h2 className="text-xl font-semibold text-gray-700">Card</h2>
        
        <div className="flex flex-col lg:flex-row gap-3 mt-4 lg:mt-0 lg:items-center">
          <p className="text-lg font-medium text-gray-600">
            Total cost: <span className="text-gray-800">${totalCost.toFixed(2)}</span>
          </p>
          
          <button
            onClick={handleSortByPrice}
            className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition duration-300 shadow-md"
          >
            Sort by Price
          </button>
          
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 transition duration-300 shadow-md"
          >
            Purchase
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-semibold mb-4">Confirm Purchase</h2>
            <p className="mb-4">The total cost of your selected items is: <strong>${totalCost.toFixed(2)}</strong></p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 transition duration-300"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert("Purchase confirmed!");
                  setShowModal(false);
                }}
                className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-3/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-12">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
