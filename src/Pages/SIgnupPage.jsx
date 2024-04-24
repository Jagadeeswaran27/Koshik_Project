import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function SignupPage() {
  return (
    <div
      className="bg-white h-full flex items-center justify-center"
      style={{ height: "calc(100vh - 68px)" }}
    >
      <div className="max-w-lg w-full bg-darkGreen text-white p-8 mx-3 shadow-lg rounded-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-white mt-2">Sign up to get started</p>
        </div>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-black"
            />
          </div>
          <NavLink
            to="/login"
            type="submit"
            className="bg-green block text-center hover:bg-emerald-900 text-green-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 w-full"
          >
            Sign Up
          </NavLink>
        </form>
        <div className="mt-4 text-center">
          <p className="text-white">
            Already have an account?{" "}
            <NavLink to="/login" className="underline">
              Log In Here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
