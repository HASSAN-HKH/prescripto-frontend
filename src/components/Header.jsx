import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center py-4 border-b mb-5 text-sm border-(--color-secondary">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" className="w-44 cursor-pointer" />
      </div>
      <nav className="flex gap-5 font-medium uppercase items-center">
        <Link to="/">Home</Link>
        <Link to="/doctors">ALL Doctors</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link
          to="/admin"
          className="px-5 normal-case font-normal border rounded-2xl py-1 border-[#e5e7eb]"
        >
          Admin Panel
        </Link>
      </nav>
      {!isAuthenticated && (
        <div className="createAccount">
          <Link
            to="/register"
            className="bg-(--color-primary) text-white px-8 py-3 rounded-full font-light"
          >
            Create Account
          </Link>
        </div>
      )}
      {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Header;
