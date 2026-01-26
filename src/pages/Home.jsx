import React from "react";
import { useNavigate } from "react-router-dom";
import group_profiles from "../assets/group_profiles.png";
import header_img from "../assets/header_img.png";
import { FaArrowRight } from "react-icons/fa";
import Dermatologist from "../assets/Dermatologist.svg";
import Gastroenterologist from "../assets/Gastroenterologist.svg";
import General_Physical from "../assets/General_Physical.svg";
import Gynecologist from "../assets/Gynecologist.svg";
import Neurologist from "../assets/Neurologist.svg";
import Pediatricians from "../assets/Pediatricians.svg";
import appointment_img from "../assets/appointment_img.png";
import { DoctorsMockData } from "../mock/DoctorsData";

const Home = () => {
  const navigate = useNavigate();

  const specialities = [
    { name: "General physician", image: General_Physical },
    { name: "Gynecologist", image: Gynecologist },
    { name: "Dermatologist", image: Dermatologist },
    { name: "Pediatricians", image: Pediatricians },
    { name: "Neurologist", image: Neurologist },
    { name: "Gastroenterologist", image: Gastroenterologist },
  ];

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
          {specialities.map((item, index) => (
            <div
              key={index}
              className="speciality flex flex-col items-center text-xs cursor-pointer shrink-0 hover:-translate-y-2.5 transition-all duration-500"
            >
              <img src={item.image} alt={item.name} className="w-24" />
              <p className="py-1">{item.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-medium text-center pb-2">
          Top Doctors to Book
        </h2>
        <p className="text-center text-sm">
          Simply browse through our extensive list of trusted doctors.
        </p>
        <div className="pb-20 pt-10">
          <div className="doctors grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 gap-y-6">
            {DoctorsMockData.map((doctor) => {
              return (
                <>
                  <div
                    key={doctor.id}
                    className="group w-full flex flex-col gap-4  border border-[#C9D8FF] rounded-xl cursor-pointer hover:-translate-y-2.5 transition-[translate] duration-400 ease-in-out"
                    onClick={() => navigate(`/doctors/${doctor.id}`)}
                  >
                    <img
                      src={doctor.profile_image}
                      alt={doctor.name}
                      className="w-full mb-2 bg-[#EAEFFF] rounded-t-xl "
                    />
                    <div className="doctor-data pb-4 px-3 ">
                      <p className="-z-10 text-sm text-[#22c55e] relative before:absolute before:content-[''] before:top-[50%] before:left-0 before:w-2 before:h-2 before:bg-[#22c55e] before:translate-y-[-50%] pl-3 before:rounded-[50%] ">
                        Available
                      </p>
                      <h3 className="text-[#262626] text-lg font-medium">
                        {doctor.name}
                      </h3>
                      <p className="text-[#5C5C5C] text-sm">
                        {doctor.speciality}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="more text-center">
            <button
              className="bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10 cursor-pointer hover:text-white hover:bg-(--color-primary) transition ease-in-out"
              onClick={() => navigate("/doctors")}
            >
              more
            </button>
          </div>
        </div>
      </section>
      <section
        className="book-appointment flex flex-col md:flex-row flex-wrap bg-(--color-primary) rounded-lg px-6 md:px-10 lg:px-24
       md:items-center pt-6"
      >
        <div className="description flex-1 text-white flex flex-col justify-start py-16 md:py-24 gap-4 text-center md:text-left">
          <h1 className="text-3xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
            Book Appointment With +100 Trusted Doctors
          </h1>

          <button
            className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer w-fit"
            onClick={() => navigate("/register")}
          >
            Create account
          </button>
        </div>
        <div className="book-image basis-[55%] self-end hidden md:flex justify-end">
          <img
            src={appointment_img}
            alt="Book Image"
            className="md:w-[350px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
