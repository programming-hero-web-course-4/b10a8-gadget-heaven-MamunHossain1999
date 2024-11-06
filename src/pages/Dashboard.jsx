import React, { useEffect, useState } from "react";
import { getAllFavorites, getAllWishlist } from "../components/localStore";
import group from "../assets/Group.png";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [showCards, setShowCards] = useState(true);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // showCards অনুযায়ী ফেভারিটস বা উইশলিস্ট থেকে ডেটা সেট করা
    if (showCards) {
      const favorites = getAllFavorites();
      setProducts(favorites);
    } else {
      const wishlist = getAllWishlist();
      setProducts(wishlist);
    }
  }, [showCards]);

  const allRemove = () => {
    localStorage.clear();
    setShowModal(false);
    setProducts([]);
  };

  const handleSortByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  document.title = "Dashboard";

  const totalCost = products.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div>
      <div className="w-11/12 mx-auto text-center bg-purple-600 pb-36">
        <div>
          <h1 className="text-4xl text-white">Dashboard</h1>
          <p className="text-2xl w-4/6 text-gray-400 mx-auto mt-3">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>

        <div className="lg:space-x-3 space-x-1 mt-10">
          <button
            onClick={() => setShowCards(true)}
            className={`border py-3 lg:px-12 px-6 space-x-2 rounded-3xl ${
              showCards ? "bg-blue-200" : ""
            }`}
          >
            Card
          </button>
          <button
            onClick={() => setShowCards(false)}
            className={`border py-3 lg:px-12 px-6 space-x-2 rounded-3xl ${
              !showCards ? "bg-blue-200" : ""
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="w-11/12 mx-auto lg:flex items-center justify-between py-4 px-6 bg-gray-100 rounded-lg shadow-md mt-5">
        <h2 className="text-xl font-semibold text-gray-700">
          {showCards ? "Card" : "Wishlist"}
        </h2>

        <div className="flex flex-col lg:flex-row gap-3 mt-4 lg:mt-0 lg:items-center">
          <p className="text-lg font-medium text-gray-600">
            Total cost:{" "}
            <span className="text-gray-800">${totalCost.toFixed(2)}</span>
          </p>

          {showCards && (
            <button
              onClick={handleSortByPrice}
              className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition duration-300 shadow-md"
            >
              Sort by Price
            </button>
          )}

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
            <div className="flex justify-center">
              <img className="w-24" src={group} alt="" />
            </div>
            <h2 className="text-2xl font-extrabold mb-4 text-center font-bold">
              Payment Successfully
            </h2>
            <p className="text-center text-2xl">Thanks for purchasing</p>
            <p className="mb-4 font-bold mt-3 text-center">
              Total cost: <strong>${totalCost.toFixed(2)}</strong>
            </p>
            <div className="flex justify-center space-x-3">
              <NavLink to='/'>
                <button
                  onClick={allRemove}
                  className="px-4 flex py-2 rounded-md bg-gray-300 hover:bg-gray-400 transition duration-300"
                >
                  Close
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      )}

      <div className="w-11/12 mx-auto mt-10">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="hero bg-base-200 mb-4 lg:flex">
              <div className="w-full lg:flex gap-8 flex-row items-center p-2 bg-gray-100 border rounded-lg">
                <img
                  src={product.product_image || "default_image.jpg"}
                  alt={product.product_title || "Product Image"}
                  className="w-[150px] h-18 object-cover rounded-lg shadow-2xl"
                />
                <div className="">
                  <h1 className="lg:text-2xl text-lg font-bold">
                    {product.product_title || "Product Title"}
                  </h1>
                  <p className="text-xl">
                    <strong>Price:</strong> ${product.price || "N/A"}
                  </p>
                  <p className="text-xl">
                    <strong>Rating:</strong> {product.rating || "N/A"} / 5
                  </p>
                  <div className="flex items-center mt-4"></div>
                </div>
                <div className="lg:ml-[900px]">
                  <ImCross className="w-56 h-16 text-red-600" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            {showCards ? "No items in your cart." : "Wishlist is currently empty."}
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
