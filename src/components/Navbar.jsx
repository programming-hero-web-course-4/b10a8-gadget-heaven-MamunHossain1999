import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GiSelfLove } from "react-icons/gi";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const bgColor =
    location.pathname === "/"
      ? "bg-purple-600"
      : location.pathname === "/statistics"
      ? "bg-blue-600"
      : location.pathname === "/dashBoard"
      ? "bg-green-600"
      : "bg-gray-600";

  return (
    <div className="w-11/12 mx-auto">
      <div className={`navbar ${bgColor} items-center`}>
        <div className="navbar-start lg:px-10">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `home ${isActive ? "text-warning " : "hover:text-warning"}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  `${isActive ? "text-warning " : "hover:text-warning"}`
                }
              >
                Statistics
              </NavLink>
              <NavLink
                to="/dashBoard"
                className={({ isActive }) =>
                  `${isActive ? "text-warning " : "hover:text-warning"}`
                }
              >
                Dashboard
              </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl hidden lg:block">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `home ${
                  isActive
                    ? " bg-lime-300 px-5 py-2 rounded-2xl text-black"
                    : "hover:text-warning"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                `${
                  isActive
                    ? " bg-lime-300 px-5 py-2 rounded-2xl text-black "
                    : "hover:text-warning"
                }`
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to="/dashBoard"
              className={({ isActive }) =>
                `${
                  isActive
                    ? " bg-lime-300 px-5 py-2 rounded-2xl text-black"
                    : "hover:text-warning"
                }`
              }
            >
              Dashboard
            </NavLink>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="flex gap-4 lg:mr-16">
            <div className="border p-3 rounded-full bg-white">
              <FiShoppingCart />
            </div>
            <div className="border p-3 rounded-full bg-white">
              <GiSelfLove />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
