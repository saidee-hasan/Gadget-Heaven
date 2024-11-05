import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ProductCart from "../components/ProductCart";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",

        element: <Home />,

        loader: () => fetch("./categories.json"),

        children: [
          {
            path: "/category/:category", // This is the correct way to define the child route

            element: <ProductCart />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default routes;
