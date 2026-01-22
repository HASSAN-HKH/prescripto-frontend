import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { NavContext } from "../context/NavContext";

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuthStore();
  const { open, setOpen, visible, setVisible } = useContext(NavContext);

  console.log(open);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleOpen = () => {
    setOpen(true);
    setVisible(true);
  };

  return (
    <div className="flex justify-between items-center py-4 border-b mb-5 text-sm border-(--color-secondary">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" className="w-44 cursor-pointer" />
      </div>
      <button className="p-2 lg:hidden" onClick={handleOpen}>
        <HiOutlineMenuAlt3 className="w-8 h-8" />
      </button>
      <nav className="lg:flex gap-5 font-medium uppercase items-center hidden">
        <Link to="/">Home</Link>
        <Link to="/doctors">ALL Doctors</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link
          to="/admin/login"
          className="px-5 normal-case font-normal border rounded-2xl py-1 border-[#e5e7eb]"
          target="_blank"
        >
          Admin Panel
        </Link>
      </nav>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <div className="createAccount hidden lg:block">
          <Link
            to="/register"
            className="bg-(--color-primary) text-white px-8 py-3 rounded-full font-light"
          >
            Create Account
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
