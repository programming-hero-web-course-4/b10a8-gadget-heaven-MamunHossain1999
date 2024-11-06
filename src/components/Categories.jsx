import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Categories = ({ categories, product }) => {
  console.log(product);
  return (
    <div className="w-11/12 flex flex-col md:flex-row mx-auto gap-4 mb-6">
   
      <div
        role="tablist"
        className="w-full md:w-1/4 space-y-4 border mt-10 md:mt-20 border-gray-300 p-4 rounded-lg"
      >
        <div>
          {categories.map((category) => (
            <NavLink
              key={category.category}
              to={`${category.link}`}
              role="tab"
              className={({ isActive }) =>
                `block min-h-20 rounded-md px-6 py-3 text-lg md:text-xl font-medium transition duration-300 ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                }`
              }
            >
              {category.category}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="w-full md:w-3/4 p-4 mt-10 md:mt-20 border rounded-lg bg-white shadow-md">
        <Outlet />
      </div>
    </div>
  );
};

export default Categories;
