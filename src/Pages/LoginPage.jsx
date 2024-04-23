import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function LoginPage() {
  const { setLogin, isLoggedIn } = useContext(AppContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const check = sessionStorage.getItem("isLoggedIn");
    if (check === "true") {
      navigate("/");
    }
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    if (
      emailRef.current.value === "test@gmail.com" &&
      passwordRef.current.value === "12345"
    ) {
      setLogin();
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/medicines");
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <div
      className="bg-white h-full flex items-center justify-center"
      style={{ height: "calc(100vh - 68px)" }}
    >
      <div className="max-w-lg w-full mx-auto bg-darkGreen text-white p-8 mx-3 shadow-lg rounded-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="text-white mt-2">Log in to your account</p>
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
              ref={emailRef}
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
              ref={passwordRef}
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-black"
            />
          </div>
          <button
            onClick={(e) => handleLogin(e)}
            type="submit"
            className="bg-green hover:bg-emerald-900 text-green-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 w-full"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-white">
            Don't have an account?{" "}
            <NavLink to="/signup" className="underline">
              Sign Up Here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
