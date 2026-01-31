import React from "react";
import { DoctorsMockData } from "../mock/DoctorsData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useDoctorsStore from "../store/doctors";
import { useEffect } from "react";

const AllDoctors = () => {
  const [visible, setVisible] = useState(false);
  const [special, setSpeciality] = useState("");

  const fetchDoctors = useDoctorsStore((state) => state.fetchDoctors);
  const { doctors, loading } = useDoctorsStore();

  const filteredDoctors =
    special === ""
      ? doctors
      : doctors.filter((doc) => {
          return doc.speciality === special;
        });

  useEffect(() => {
    if (doctors.length === 0) {
      fetchDoctors();
    }
  }, [doctors.length, fetchDoctors]);

  const navigate = useNavigate();

  const specialities = [
    { name: "General Physician" },
    { name: "Gynecologist" },
    { name: "Dermatologist" },
    { name: "Pediatrician" },
    { name: "Neurologist" },
    { name: "Gastroenterologist" },
  ];

  return (
    <div className="all-doctors">
      <p className="pb-2 text-gray-600">
        Browse through the doctors specialist.
      </p>
      <button
        className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden border-[#e5e7eb] cursor-pointer ${
          visible ? `bg-(--color-primary) text-white border-transparent` : ``
        }`}
        onClick={() => setVisible(!visible)}
      >
        Filters
      </button>
      {visible && (
        <div className="filters my-4 sm:hidden">
          <ul className="flex flex-col gap-4 text-sm text-gray-600">
            {specialities.map((speciality, ind) => {
              return (
                <>
                  <li
                    key={ind}
                    className={`pl-3 py-1.5 pr-16 border border-gray-300 rounded cursor-pointer hover:pl-5 transition-all duration-300 ease-in-out ${
                      special === speciality.name
                        ? `text-black bg-[#e2e5ff]`
                        : ``
                    }`}
                    onClick={() => {
                      if (special === speciality.name) {
                        setSpeciality("");
                      } else {
                        setSpeciality(speciality.name);
                      }
                    }}
                  >
                    {speciality.name}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      )}
      <main className="flex gap-6">
        <div className="filters my-4 hidden sm:block w-50">
          <ul className="flex flex-col gap-4 text-sm text-gray-600">
            {specialities.map((speciality, ind) => {
              return (
                <li
                  key={ind}
                  className={`pl-3 py-1.5 pr-16 border border-gray-300 rounded cursor-pointer hover:pl-5 transition-all duration-300 ease-in-out ${
                    special === speciality.name ? `text-black bg-[#e2e5ff]` : ``
                  }`}
                  onClick={() => {
                    if (special === speciality.name) {
                      setSpeciality("");
                    } else {
                      setSpeciality(speciality.name);
                    }
                  }}
                >
                  {speciality.name}
                </li>
              );
            })}
          </ul>
        </div>
        <section className="doctors mt-8 sm:mt-4 flex-1">
          {loading && <p>Loading...</p>}
          {!loading && filteredDoctors.length === 0 && <p>No Doctors Found</p>}
          {!loading && (
            <div className="doctors grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 gap-y-6">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="group w-full flex flex-col gap-4 border border-[#C9D8FF] rounded-xl cursor-pointer hover:-translate-y-2.5 transition-[translate] duration-400 ease-in-out"
                  onClick={() => navigate(`/doctors/${doctor.id}`)}
                >
                  <img
                    src={doctor.profile_image}
                    alt={doctor.name}
                    className="w-full mb-2 bg-[#EAEFFF] rounded-t-xl"
                  />

                  <div className="doctor-data pb-4 px-3">
                    <p className="text-sm text-[#22c55e] relative before:absolute before:content-[''] before:top-1/2 before:left-0 before:w-2 before:h-2 before:bg-[#22c55e] before:-translate-y-1/2 pl-3 before:rounded-full">
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
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default AllDoctors;
