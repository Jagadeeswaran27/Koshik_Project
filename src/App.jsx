import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./Pages/RootPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import MedicinesPage from "./Pages/MedicinesPage";
import { AppContext } from "./context/AppContext";
import { useState } from "react";
import OrderPage from "./Pages/OrderPage";
import ProductDetails from "./Pages/ProductDetailsPage";
import Payment from "./Pages/PaymentPage";
export default function App() {
  const [state, setState] = useState({
    isLoggedIn: false,
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/medicines",
          element: <MedicinesPage />,
        },
        {
          path: "/order/:id",
          element: <OrderPage />,
        },
        {
          path: "/medicine/:id/desc",
          element: <ProductDetails />,
        },
        {
          path: "/payment/:id",
          element: <Payment />,
        },
      ],
    },
  ]);
  function setLogin() {
    setState(() => {
      return {
        isLoggedIn: true,
      };
    });
  }
  function removeLogin() {
    setState(() => {
      return {
        isLoggedIn: false,
      };
    });
  }
  const ctxValue = {
    isLoggedIn: state.isLoggedIn,
    setLogin: setLogin,
    removeLogin: removeLogin,
  };
  return (
    <AppContext.Provider value={ctxValue}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}
