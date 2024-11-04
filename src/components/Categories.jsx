import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Categories = ({ categories, product }) => {
  // console.log(categories)
  console.log(product);
  return (
    <div className="w-11/12 flex flex-col md:flex-row mx-auto gap-2 mb-6">
      {/* Sidebar */}
      <div
        role="tablist"
        className="w-full md:w-1/4 space-y-4 border mt-10 md:mt-20 border-gray-300"
      >
        <div className="">
          {categories.map((category) => (
            <NavLink
              key={category.category}
              to={`${category.link}`}
              role="tab"
              className={({ isActive }) =>
                `tab pt-4 text-lg md:text-2xl block min-h-20 rounded-md ${
                  isActive ? "tab-active bg-blue-200" : "hover:bg-blue-100"
                }`
              }
            >
              {category.category}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full md:w-3/4 p-4 mt-10 md:mt-20 border">
        <Outlet />
      </div>
    </div>
  );
};

export default Categories;
