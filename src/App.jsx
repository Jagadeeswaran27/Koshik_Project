import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./Pages/RootPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import MedicinesPage from "./Pages/MedicinesPage";
import { AppContext } from "./context/AppContext";
import { useState } from "react";
import OrderPage from "./Pages/OrderPage";
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
          path: "/medicine/:id",
          element: <OrderPage />,
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
