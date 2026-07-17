import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";
import ProductDetails from "./components/product/ProductDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            index:true,
            element:<Home />
        },
        {
            path:"products",
            element:<Products />
        },
        {
            path:"product/:id",
            element:<ProductDetails />
        },
        {
            path:"cart",
            element:<Cart />
        }
        ,
        {
            path:"login",
            element:<Login />
        }
        ,
        {
            path:"register",
            element:<Register />
        }
    ]
  },
]);

export default router;