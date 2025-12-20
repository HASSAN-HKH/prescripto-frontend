import React from "react";
import group_profiles from "../assets/group_profiles.png";
import header_img from "../assets/header_img.png";
import { FaArrowRight } from "react-icons/fa";
import Dermatologist from "../assets/Dermatologist.svg";
import Gastroenterologist from "../assets/Gastroenterologist.svg";
import General_Physical from "../assets/General_Physical.svg";
import Gynecologist from "../assets/Gynecologist.svg";
import Neurologist from "../assets/Neurologist.svg";
import Pediatricians from "../assets/Pediatricians.svg";

const Home = () => {
  return (
    <div className="home">
      <section
        className="baner flex flex-col md:flex-row flex-wrap bg-(--color-primary) rounded-lg px-6 md:px-10 lg:px-24
       md:items-center pt-6"
      >
        <div className="website-description flex-1 text-white flex flex-col justify-start py-16 md:py-24 gap-4 text-center md:text-left">
          <h1 className="text-3xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
            Book Appointment With Trusted Doctors
          </h1>
          <div className="doctors">
            <img
              src={group_profiles}
              alt="Group_Profiles"
              className="w-24 pb-2 m-auto md:m-0"
            />
            <p>
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer w-fit">
            Book appointment <FaArrowRight />
          </button>
        </div>
        <div className="header-image basis-[55%] self-end">
          <img src={header_img} alt="Header Image" />
        </div>
      </section>
      <section className="find-doctor py-20 flex flex-col gap-7 items-center">
        <h2 className="text-3xl font-medium">Find by Speciality</h2>
        <p className="sm:w-1/3 text-center text-sm pb-2">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
        <div className="sepcials flex flex-wrap gap-4 justify-center sm:justify-normal">
          <div className="speciality flex flex-col items-center text-xs cursor-pointer shrink-0 hover:-translate-y-2.5 transition-all duration-500">
            <img
              src={General_Physical}
              alt="Image"
              className="w-24
            "
            />
            <p className="py-1">General physician</p>
          </div>
          <div className="speciality flex flex-col items-center text-xs cursor-pointer shrink-0 hover:-translate-y-2.5 transition-all duration-500">
            <img
              src={Gynecologist}
              alt="Image"
              className="w-24
            "
            />
            <p className="py-1">Gynecologist</p>
          </div>
          <div className="speciality flex flex-col items-center text-xs cursor-pointer shrink-0 hover:-translate-y-2.5 transition-all duration-500">
            <img
              src={Dermatologist}
              alt="Image"
              className="w-24
            "
            />
            <p className="py-1">Dermatologist</p>
          </div>
          <div className="speciality flex flex-col items-center text-xs cursor-pointer shrink-0 hover:-translate-y-2.5 transition-all duration-500">
            <img
              src={Pediatricians}
              alt="Image"
              className="w-24
            "
            />
            <p className="py-1">Pediatricians</p>
          </div>
          <div className="speciality flex flex-col items-center text-xs cursor-pointer shrink-0 hover:-translate-y-2.5 transition-all duration-500">
            <img
              src={Neurologist}
              alt="Image"
              className="w-24
            "
            />
            <p className="py-1">Neurologist</p>
          </div>
          <div className="speciality flex flex-col items-center text-xs cursor-pointer shrink-0 hover:-translate-y-2.5 transition-all duration-500">
            <img
              src={Gastroenterologist}
              alt="Image"
              className="w-24
            "
            />
            <p className="py-1">Gastroenterologist</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
