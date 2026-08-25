import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";
import ProductDetails from "./components/product/ProductDetails";
import ProtectedRouter from "./components/protectedRouter/ProtectedRouter";
import Checkout from "./pages/checkout/Checkout";
import ProfileLayout from "./pages/profile/ProfileLayout";
import ProfileInfo from "./pages/profile/ProfileInfo";
import ProfileOrders from "./pages/profile/ProfileOrders";
import ForgotPassword from "./pages/forgotPassowrd/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import AboutUs from "./pages/aboutUs/AboutUs";

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
            element:<ProtectedRouter><Cart /></ProtectedRouter>
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
        },
        {
            path:"checkout",
            element:<ProtectedRouter><Checkout /></ProtectedRouter>
        },
        {
            path:"profile",
            element:<ProtectedRouter><ProfileLayout /></ProtectedRouter>,
            children:[
                {
                    index:true,
                    element:<ProfileInfo />
                },
                {
                    path:"orders",
                    element:<ProfileOrders />
                }
            ]
        }
        ,{
            path:"forgot",
            element:<ForgotPassword />
        }
        ,{
            path:"reset",
            element:<ResetPassword />
        }
        ,{
            path:"aboutUs",
            element:<AboutUs />
        }
        
    ]
  },
]);

export default router;