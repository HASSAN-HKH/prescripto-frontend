import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllDoctors from "./pages/AllDoctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import { NavContext } from "./context/NavContext";
import logo from "./assets/logo.svg";
import { HiOutlineX } from "react-icons/hi";

const App = () => {
  const { open, setOpen, visible, setVisible } = useContext(NavContext);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setVisible(false);
    }, 500);
  };

  return (
    <div className="mx-4 sm:mx-[10%]">
      <Router>
        {visible && (
          <div
            className={`h-full w-full bg-white absolute top-0 left-0 transition-all duration-900 ${
              open ? "animate-menu-open" : "animate-menu-close"
            } lg:hidden lg: px-5`}
          >
            <div className="head flex justify-between items-center py-6 mb-5 text-sm border-(--color-secondary">
              <div className="logo">
                <img src={logo} alt="Logo" className="w-44 cursor-pointer" />
              </div>
              <button className="p-2 lg:hidden" onClick={handleClose}>
                <HiOutlineX className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex flex-col gap-5 font-medium uppercase items-center">
              <Link to="/" onClick={handleClose}>
                Home
              </Link>
              <Link to="/doctors" onClick={handleClose}>
                ALL Doctors
              </Link>
              <Link to="/about" onClick={handleClose}>
                About
              </Link>
              <Link to="/contact" onClick={handleClose}>
                Contact
              </Link>
              <Link
                to="/admin"
                className="px-5 normal-case font-normal border rounded-2xl py-1 border-[#e5e7eb]"
                onClick={handleClose}
              >
                Admin Panel
              </Link>
            </nav>
          </div>
        )}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctors" element={<AllDoctors />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
