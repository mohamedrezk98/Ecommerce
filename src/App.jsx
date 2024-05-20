
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import MainLayout from "./Layouts/MainLayout";
import Cart from "./Components/Cart/Cart";
import NotFound from "./Components/NotFound/NotFound";
import Products from "./Components/Products/Products";
import Brands from "./Components/Brands/Brands";
import Categories from "./Components/Categories/Categories";
import AuthLayout from "./Layouts/AuthLayout";
import Singin from "./Components/Signin/Signin";
import SignUp from "./Components/SignUp/SignUp";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import ProductDetails from "./Components/Product-Details/ProductDetails";
import CartContextProvider from "./context/cartContext";
import { ToastContainer } from 'react-toastify';
import { Offline } from "react-detect-offline";

export default function App() {
  const routes = createHashRouter([
    {
      path: '/', element: <MainLayout />, children: [
        { index: true, element: <ProtectedRoutes><Home /></ProtectedRoutes> },
        { path: 'home', element: <ProtectedRoutes><Home /></ProtectedRoutes> },
        { path: 'Cart', element: <ProtectedRoutes><Cart /></ProtectedRoutes> },

        { path: 'products', element: <ProtectedRoutes><Products /></ProtectedRoutes> },
        { path: 'Categories', element: <ProtectedRoutes><Categories /></ProtectedRoutes> },
        { path: 'ProductDetails/:id', element: <ProtectedRoutes><ProductDetails /></ProtectedRoutes> },
        { path: 'brands', element: <ProtectedRoutes><Brands /></ProtectedRoutes> },
        { path: '*', element: <NotFound /> }
      ]
    },
    {

      path: '/', element: <AuthLayout />, children: [
        { path: 'signin', element: <Singin /> },
        { path: 'signup', element: <SignUp /> },

      ]
    }


  ])

  return <div>
    <CartContextProvider>

      <RouterProvider router={routes} />


    </CartContextProvider>
    <ToastContainer theme="colored" autoClose="600" position="top-center"/>
    <Offline>

    <div className="bg-main fixed-bottom w-25  d-flex align-items-center justify-content-center text-white   rounded-3 text-center fs-2 ">
      you are offline
    </div>

    </Offline>

  </div>
}