import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./components/MainLayOut.jsx";
import Home from "./pages/Home.jsx";
import Statistics from "./pages/Statistics.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AllProduct from "./components/AllProduct.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/category.json"),
        children: [
          {
            path: "/",
            element: <AllProduct />,
            loader: () => fetch("/allProduct.json"),
          },
          {
            path: "category/:category",
            element: <AllProduct />,
            loader: () => fetch("../allProduct.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path:"/product/:id",
        element: <ProductDetails />,
        loader: () => fetch("../allProduct.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
