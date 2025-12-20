import React, { useState } from "react";
import adminApi from "../../api/adminApi";
import { useEffect } from "react";

const AdminDoctorsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await adminApi.get("/admin/doctors");
        setData(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        alert(error.response?.data?.message || "Fetch failed");
      }
    };

    fetchDoctors();
  }, []);
  return (
    <div>
      <h2>Doctors List</h2>
      {data.length === 0 && <p>No doctors found</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {data.map((doctor) => (
          <div
            key={doctor.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              width: "200px",
            }}
          >
            <img
              src={doctor.profile_image}
              alt={doctor.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{doctor.name}</h3>
            <p>{doctor.email}</p>
            <p>{doctor.speciality}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDoctorsList;
