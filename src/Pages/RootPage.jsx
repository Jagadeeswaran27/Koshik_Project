import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
export default function RootPage() {
  const { isLoggedIn, setLogin, removeLogin } = useContext(AppContext);
  useEffect(() => {
    const storedIsLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn === "true") {
      setLogin();
    }
  }, []);
  const navigate = useNavigate();
  function handleLogout() {
    sessionStorage.setItem("isLoggedIn", "false");
    removeLogin();
    navigate("/login");
  }
  return (
    <main>
      <div className="flex justify-around items-center py-5 text-xl sticky left-0 top-0 w-full bg-green text-white">
        <NavLink to="/" className="text-lg md:text-xl">
          Pharmacy Management System
        </NavLink>
        {isLoggedIn ? (
          <p
            onClick={handleLogout}
            className="cursor-pointer text-sm md:text-xl"
          >
            Logout
          </p>
        ) : (
          <NavLink to="/login" className="cursor-pointer text-sm md:text-xl">
            Login
          </NavLink>
        )}
      </div>
      <Outlet />
    </main>
  );
}
