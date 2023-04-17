import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inventory from './component/inventory/Inventory';
import Home from './component/layout/Home';
import Shop from './component/shop/Shop';
import Orders from './component/orders/Orders';
import Login from './component/login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';
import CheckOut from './component/checkout/CheckOut';
import Register from './component/register/Register';
import AuthProviders from './component/providers/AuthProviders';
import PrivetRout from './routes/PrivetRout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "orders",
        element: <Orders />,
        loader: cartProductsLoader,
      },
      {
        path: "inventory",
        element: (
          <PrivetRout>
            <Inventory />
          </PrivetRout>
        ),
      },
      {
        path: "checkout",
        element: (
          <PrivetRout>
            <CheckOut />
          </PrivetRout>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />

    </AuthProviders>
  </React.StrictMode>,
)
