// src/App.js
import React,{useEffect} from "react";
import {
  createBrowserRouter,
  RouterProvider,
Navigate,
} from "react-router-dom";

import ChangeLanguage from "./pages/ChangeLanguage";
import LayOut from "./layout/LayOut";
import Home from "./pages/Home";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import Account from "./components/Profile/Account";
import Shop from "./pages/Shop";
// import Product from "./pages/NewProduct";

import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";

import NewProduct from "./pages/NewProduct";

import CategoryList from "./pages/CategoryList ";
import FavoritesList from "./pages/FavoritesList";

function App() {

 const PrivateRoute = ({ children }) => {
   const token = localStorage.getItem("token");

   return token ? children : <Navigate to="/login" />;
 };

  
    
  let router = createBrowserRouter([
    {
      path: "/",
      Component: LayOut,
      children: [
        {
          index: true,
          Component: Home,
        },

        {
          path: "login",
          Component: SignIn,
        },
        {
          path: "register",
          Component: SignUp,
        },

        {
          path: "shop",
          Component: Shop,
        },

        {
          path: "product",
          Component: NewProduct,
        },

        {
          path: "product/:productId",
          // Component: ProductId,
          Component: ProductPage,
        },

        {
          path: "contact-us",
          Component: ContactUs,
        },

        {
          path: "cart",
          Component: () => (
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          ),
        },

        {
          path: "change-language",
          Component: ChangeLanguage,
        },
        {
          path: "profile",
         Component: () => (
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
