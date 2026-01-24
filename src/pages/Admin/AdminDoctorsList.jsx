import React, { useState } from "react";
import adminApi from "../../api/adminApi"; // because I need to ensure that the admin-token is sent with the request
import { useEffect } from "react";
import { DoctorsMockData } from "../../mock/DoctorsData";

const AdminDoctorsList = () => {
  const [data, setData] = useState([]);
  const [mockData, setMockData] = useState(DoctorsMockData);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await adminApi.get("/admin/doctors");
        setData(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        // alert(error.response?.data?.message || "Fetch failed");
      }
    };

    fetchDoctors();
  }, []);
  return (
    <div>
      <h2 className="mb-4 font-semibold">All Doctors</h2>
      {mockData.length === 0 && <p>No doctors found</p>}

      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 gap-y-6 px-3 sm:px-0">
        {mockData.map((doctor) => (
          <div
            key={doctor.id}
            className="group w-full flex flex-col gap-4  border border-[#C9D8FF] rounded-xl cursor-pointer"
          >
            <img
              src={doctor.profile_image}
              alt={doctor.name}
              className="w-full mb-2 bg-[#EAEFFF] group-hover:bg-(--color-primary) rounded-t-xl transition-[background-color] duration-500"
            />
            <div className="doctor-data py-2 px-3 ">
              <h3 className="text-[#262626] text-lg font-medium">
                {doctor.name}
              </h3>
              <p className="text-[#5C5C5C] text-sm">{doctor.speciality}</p>
              <div className="available flex gap-1 py-2.5">
                <input
                  type="checkbox"
                  name={doctor.name}
                  id={doctor.id}
                  className=" accent-blue-500"
                />
                <label htmlFor={doctor.id}>Available</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDoctorsList;
