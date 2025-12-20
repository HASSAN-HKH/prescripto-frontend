import React, { useState } from "react";
import doctor_icon from "../../assets/doctor_icon.svg";
import appointments_icon from "../../assets/appointments_icon.svg";
import patients_icon from "../../assets/patients_icon.svg";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import adminApi from "../../api/adminApi";
import { useEffect } from "react";

const AdminDashboard = () => {
  const date = new Date();
  const [book, setBook] = useState({});

  const handleTaskComplete = (id) => {
    setBook({ ...book, [id]: "complete" });
  };

  const handleTaskCancelled = (id) => {
    setBook({ ...book, [id]: "cancel" });
  };

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await adminApi.get("/admin/dashboard");
        alert(res.data.message);
      } catch (error) {
        alert(error.response?.data?.message || "Fetch failed");
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="admin-dash">
      <div className="stats flex gap-8">
        <div className="doctors flex basis-56 flex-col items-center bg-white p-4">
          <img src={doctor_icon} alt="Image" />
          <p className="py-1">{15} Doctors</p>
        </div>
        <div className="appointments flex basis-56 flex-col items-center bg-white p-4">
          <img src={appointments_icon} alt="Image" />
          <p className="py-1">{6} Appointments</p>
        </div>
        <div className="patients flex basis-56 flex-col items-center bg-white p-4">
          <img src={patients_icon} alt="Image" />
          <p className="py-1">{6} Patients</p>
        </div>
      </div>
      <div className="latest-bookings p-4 bg-white my-8 w-2/3 flex flex-col gap-5">
        <h2>Latest Bookings</h2>
        <div className="book flex gap-5 justify-between items-center" id="1">
          <div className="doctorInfo flex gap-4 items-center">
            <img src={doctor_icon} alt="Image" />
            <div>
              <h3>Doctor's Name 1</h3> <span>{date.toDateString()}</span>
            </div>
          </div>
          {!book[1] && (
            <div className="buttons flex gap-2.5 items-center">
              <AiOutlineCheck
                size={28}
                color="green"
                className="cursor-pointer"
                onClick={() => handleTaskComplete(1)}
              />
              <AiOutlineClose
                size={28}
                color="red"
                className="cursor-pointer"
                onClick={() => handleTaskCancelled(1)}
              />
            </div>
          )}
          {book[1] === "complete" && (
            <p className="text-green-500 bold">Completed</p>
          )}
          {book[1] === "cancel" && (
            <p className="text-red-500 bold">Cancelled</p>
          )}
        </div>
        <div className="book flex gap-5 justify-between items-center" id="1">
          <div className="doctorInfo flex gap-4 items-center">
            <img src={doctor_icon} alt="Image" />
            <div>
              <h3>Doctor's Name 2</h3> <span>{date.toDateString()}</span>
            </div>
          </div>
          {!book[2] && (
            <div className="buttons flex gap-2.5 items-center">
              <AiOutlineCheck
                size={28}
                color="green"
                className="cursor-pointer"
                onClick={() => handleTaskComplete(2)}
              />
              <AiOutlineClose
                size={28}
                color="red"
                className="cursor-pointer"
                onClick={() => handleTaskCancelled(2)}
              />
            </div>
          )}
          {book[2] === "complete" && (
            <p className="text-green-500 bold">Completed</p>
          )}
          {book[2] === "cancel" && (
            <p className="text-red-500 bold">Cancelled</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
