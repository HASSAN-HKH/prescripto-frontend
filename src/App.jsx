import React from "react";
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

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Router>
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
