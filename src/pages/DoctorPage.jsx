import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import verify from "../assets/verify.svg";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import useDoctorsStore from "../store/doctors";
import { useEffect } from "react";

const getNextDays = (count = 7) => {
  const days = [];

  for (let i = 0; i < count; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);

    days.push({
      fullDate: date,
      day: date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
      date: date.getDate(),
      iso: date.toISOString().split("T")[0], // useful for backend
    });
  }

  return days;
};

const DoctorPage = () => {
  const days = getNextDays(7);
  const [selectedDay, setSelectedDay] = useState("");
  const navigate = useNavigate();

  const { doctorId } = useParams();

  const fetchDoctors = useDoctorsStore((state) => state.fetchDoctors);
  const { doctors, loading } = useDoctorsStore();

  useEffect(() => {
    if (doctors.length === 0) {
      fetchDoctors();
    }
  }, [doctors.length, fetchDoctors]);

  const doctor = doctors.find((doc) => doc.id === Number(doctorId));

  const filteredDoctors = doctors.filter((doc) => {
    return doc.speciality === doctor.speciality && doc.id !== doctor.id;
  });

  return (
    <>
      <div className="doctorInfo">
        {loading && <p>Loading...</p>}
        {!loading && doctor && (
          <section className="info flex flex-col md:flex-row md:gap-4">
            <div className="image">
              <img
                src={doctor.profile_image}
                alt="Image"
                className="bg-(--color-primary) rounded-2xl w-full"
              />
            </div>
            <div className="details w-[98%] bg-white border border-[#ADADAD] p-8 mx-auto rounded-2xl -mt-14 md:mt-0">
              <h2 className="text-3xl font-medium text-gray-700 flex gap-2.5">
                {doctor.name}
                <img src={verify} alt="Image" className="w-5" />
              </h2>
              <p className="text-gray-600 flex gap-2.5 mt-1 mb-4">
                {doctor.degree} - {doctor.speciality}
                <span className="py-0.5 px-2 border border-[#ADADAD] text-xs rounded-full">
                  {doctor.experience}
                </span>
              </p>
              <p className="flex items-center gap-1">
                About <AiOutlineExclamationCircle className="text-xs" />
              </p>
              <p className="text-sm text-gray-600 mt-1 mb-4">{doctor.about}</p>
              <p className="text-gray-600 font-medium">
                Appointment fee:
                <span className="text-black"> ${doctor.fees}</span>
              </p>
            </div>
          </section>
        )}
        <section className="book mt-8">
          <p className="font-medium text-[#565656]">Booking slots</p>
          <div className="time mt-4">
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => setSelectedDay("")}
                className={`w-16 h-20 rounded-full border flex flex-col items-center justify-center text-sm transition cursor-pointer
            ${
              selectedDay === ""
                ? "bg-(--color-primary) text-white"
                : "border-gray-300 text-gray-700 hover:border-(--color-primary)"
            }`}
              ></button>
              {days.map((d) => (
                <button
                  key={d.iso}
                  onClick={() => setSelectedDay(d.iso)}
                  className={`w-16 h-20 rounded-full border flex flex-col items-center justify-center text-sm transition cursor-pointer
            ${
              selectedDay === d.iso
                ? "bg-(--color-primary) text-white"
                : "border-gray-300 text-gray-700 hover:border-(--color-primary)"
            }`}
                >
                  <span className="font-medium">{d.day}</span>
                  <span className="text-lg">{d.date}</span>
                </button>
              ))}
            </div>
            {selectedDay ? (
              <div className="slots flex gap-2.5 my-4 scrollbar-hide overflow-x-scroll">
                <p className="text-sm font-light  shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                  10:00 am
                </p>
                <p className="text-sm font-light  shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                  10:30 am
                </p>
                <p className="text-sm font-light  shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                  11:00 am
                </p>
                <p className="text-sm font-light  shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                  11:30 am
                </p>
                <p className="text-sm font-light  shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                  1:00 pm
                </p>
                <p className="text-sm font-light  shrink-0 px-5 py-2 rounded-full cursor-pointer text-[#949494] border border-[#B4B4B4]">
                  1:30 pm
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <button className="my-6 text-white text-sm font-light px-20 py-3 rounded-full bg-(--color-primary) cursor-pointer">
            Book an appointment
          </button>
        </section>
        <section className="related-doctors my-16">
          <h2 className="text-3xl font-medium text-center my-4">
            Related Doctors
          </h2>
          <p className="sm:w-1/3 text-center text-sm mx-auto my-4">
            Simply browse through our extensive list of trusted doctors.
          </p>
          <div className="doctors grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 gap-y-6 mt-10">
            {loading && <p>Loading...</p>}
            {!loading && filteredDoctors.length === 0 && (
              <p>No Related Doctors</p>
            )}
            {!loading &&
              filteredDoctors.map((doc) => {
                return (
                  <div
                    key={doc.id}
                    className="group w-full flex flex-col gap-4  border border-[#C9D8FF] rounded-xl cursor-pointer hover:-translate-y-2.5 transition-[translate] duration-400 ease-in-out"
                    onClick={() => navigate(`/doctors/${doc.id}`)}
                  >
                    <img
                      src={doc.profile_image}
                      alt={doc.name}
                      className="w-full mb-2 bg-[#EAEFFF] rounded-t-xl "
                    />
                    <div className="doctor-data pb-4 px-3 ">
                      <p className="-z-10 text-sm text-[#22c55e] relative before:absolute before:content-[''] before:top-[50%] before:left-0 before:w-2 before:h-2 before:bg-[#22c55e] before:translate-y-[-50%] pl-3 before:rounded-[50%] ">
                        Available
                      </p>
                      <h3 className="text-[#262626] text-lg font-medium">
                        {doc.name}
                      </h3>
                      <p className="text-[#5C5C5C] text-sm">{doc.speciality}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </>
  );
};

export default DoctorPage;
