import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="company-info flex flex-col justify-between text-(--color-secondary) text-sm md:flex-row gap-2 md:gap-0">
        <div className="md:basis-md ">
          <div className="logo">
            <img src={logo} alt="Logo" className="w-44 cursor-pointer mb-5" />
          </div>
          <p className="w-full leading-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ex
            earum a cumque hic, ipsa deserunt maiores dolores aut blanditiis?
            Eum rem eaque, vel tempore tempora explicabo ipsam asperiores minus!
          </p>
        </div>
        <div>
          <h1 className="mb-5 text-xl font-medium text-black uppercase">
            Company
          </h1>
          <nav className="flex gap-2 flex-col text-sm">
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>Delivery</Link>
            <Link>Privacy policy</Link>
          </nav>
        </div>
        <div>
          <h1 className="mb-5 text-xl font-medium text-black uppercase">
            Get in touch
          </h1>
          <p className="pb-2">+0-000-000-000</p>
          <p>greatstackdev@gmail.com</p>
        </div>
      </div>
      <hr className="mt-6 border-[#e5e7eb]" />
      <div className="footer text-center text-sm py-5 text-black">
        Copyright 2024 @ Greatstack.dev - All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
