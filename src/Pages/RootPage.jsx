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
  console.log(isLoggedIn);
  const navigate = useNavigate();
  function handleLogout() {
    sessionStorage.setItem("isLoggedIn", "false");
    removeLogin();
    navigate("/login");
  }
  console.log(isLoggedIn);
  return (
    <main>
      <div className="flex justify-around py-5 text-xl sticky left-0 top-0 w-full bg-green text-white">
        <NavLink to="/">Pharmacy Management System</NavLink>
        {isLoggedIn ? (
          <p onClick={handleLogout} className="cursor-pointer">
            Logout
          </p>
        ) : (
          <NavLink to="/login" className="cursor-pointer">
            Login
          </NavLink>
        )}
      </div>
      <Outlet />
    </main>
  );
}
