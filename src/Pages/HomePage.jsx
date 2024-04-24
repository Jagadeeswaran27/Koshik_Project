import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("isLoggedIn"));
  }, []);
  return (
    <div
      className="bg-gray-100 h-full flex items-center justify-center"
      style={{ height: "calc(100vh - 68px)" }}
    >
      <div className="max-w-md bg-darkGreen mx-3 text-white p-8 shadow-lg rounded-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Welcome to Our Company</h1>
          <p className=" mt-2">
            We are dedicated to providing high-quality healthcare products and
            services.
          </p>
        </div>
        {isLoggedIn !== "true" ? (
          <NavLink
            to="/login"
            className="block text-center w-full bg-green hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          >
            Log In
          </NavLink>
        ) : (
          <NavLink
            className="block text-center w-full bg-green hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
            to="/medicines"
          >
            View Medicines
          </NavLink>
        )}
        {isLoggedIn !== "true" && (
          <div className="mt-4 text-center">
            <p className="">Don't have an account?</p>
            <NavLink
              to="/signup"
              className="text-white font-semibold underline"
            >
              Sign Up Here
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
