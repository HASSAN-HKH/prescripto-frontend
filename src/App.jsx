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
import { NavContext } from "./context/NavContext";
import logo from "./assets/logo.svg";
import { HiOutlineX } from "react-icons/hi";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import DoctorLogin from "./pages/Doctor/DoctorLogin";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import PublicLayout from "./layout/PublicLayout";
import PanelLayout from "./layout/PanelLayout";

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
        <Routes>
          <Route
            path="/"
            element={
              <PublicLayout>
                <Home />
              </PublicLayout>
            }
          />
          <Route
            path="/login"
            element={
              <PublicLayout>
                <Login />
              </PublicLayout>
            }
          />
          <Route
            path="/about"
            element={
              <PublicLayout>
                <About />
              </PublicLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <PublicLayout>
                <Contact />
              </PublicLayout>
            }
          />
          <Route
            path="/register"
            element={
              <PublicLayout>
                <Register />
              </PublicLayout>
            }
          />
          <Route
            path="/doctors"
            element={
              <PublicLayout>
                <AllDoctors />
              </PublicLayout>
            }
          />
          <Route
            path="/admin/login"
            element={
              <PanelLayout>
                <AdminLogin />
              </PanelLayout>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <PanelLayout>
                <AdminDashboard />
              </PanelLayout>
            }
          />
          <Route
            path="/doctor/login"
            element={
              <PanelLayout>
                <DoctorLogin />
              </PanelLayout>
            }
          />
          <Route
            path="/doctor/dashboard"
            element={
              <PanelLayout>
                <DoctorDashboard />
              </PanelLayout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
