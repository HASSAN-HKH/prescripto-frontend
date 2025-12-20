import React from "react";
import admin_logo from "../assets/admin_logo.svg";
import { Link } from "react-router-dom";
import add_icon from "../assets/add_icon.svg";
import appointment_icon from "../assets/appointment_icon.svg";
import people_icon from "../assets/people_icon.svg";
import home_icon from "../assets/home_icon.svg";
import { Outlet } from "react-router-dom";
import useAuthAdminStore from "../store/authAdminStore";
import { useNavigate } from "react-router-dom";

const DashboardLayout = ({ page }) => {
  const { isAuthenticated, logout } = useAuthAdminStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <>
      {page === "admin" && (
        <div className="admin-dashboard">
          <div className="flex justify-between items-center py-4 mb-px shadow-[0px_1px_2px_0px_#80808054] text-sm border-(--color-secondary px-6">
            <div className="logo">
              <img
                src={admin_logo}
                alt="Logo"
                className="w-44 cursor-pointer"
              />
            </div>
            {isAuthenticated && (
              <div className="logout">
                <button
                  className="bg-(--color-primary) text-white px-10 py-3 rounded-full font-medium text-[16px] cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          <main className=" flex min-h-screen">
            <aside className="bg-white flex-2/12 pt-4 ">
              <nav className="flex flex-col gap-0.5 font-medium">
                <Link
                  to="/admin/dashboard"
                  className="flex gap-2 py-3 pl-6 hover:bg-[#5f6fff2b] hover:border-r-3 hover:border-(--color-primary) transition-[background-color] duration-150"
                >
                  <img src={home_icon} alt="Icon" />
                  Dashboard
                </Link>

                <Link
                  to="/admin/appointments"
                  className="flex gap-2 py-3 pl-6 hover:bg-[#5f6fff2b] hover:border-r-3 hover:border-(--color-primary) transition-[background-color] duration-150"
                >
                  <img src={appointment_icon} alt="Icon" />
                  Appointments
                </Link>

                <Link
                  to="/admin/add-doctor"
                  className="flex gap-2 py-3 pl-6 hover:bg-[#5f6fff2b] hover:border-r-3 hover:border-(--color-primary) transition-[background-color] duration-150"
                >
                  <img src={add_icon} alt="Icon" />
                  Add Doctor
                </Link>
                <Link
                  to="/admin/doctors"
                  className="flex gap-2 py-3 pl-6 hover:bg-[#5f6fff2b] hover:border-r-3 hover:border-(--color-primary) transition-[background-color] duration-150"
                >
                  <img src={people_icon} alt="Icon" />
                  Doctors List
                </Link>
              </nav>
            </aside>
            <section className="content flex-10/12 bg-[#f5f4f4ec] p-4">
              <Outlet />
            </section>
          </main>
        </div>
      )}
      {page === "doctor" && (
        <div className="admin-dashboard">
          <div className="flex justify-between items-center py-4 mb-px shadow-[0px_1px_2px_0px_#80808054] text-sm border-(--color-secondary px-6">
            <div className="logo">
              <img
                src={admin_logo}
                alt="Logo"
                className="w-44 cursor-pointer"
              />
            </div>
            <div className="logout">
              <button className="bg-(--color-primary) text-white px-10 py-3 rounded-full font-medium text-[16px] cursor-pointer">
                Logout
              </button>
            </div>
          </div>
          <main className=" flex min-h-screen">
            <aside className="bg-white flex-2/12 pt-4 ">
              <nav className="flex flex-col gap-0.5 font-medium">
                <Link
                  to="/doctor/dashboard"
                  className="flex gap-2 py-3 pl-6 hover:bg-[#5f6fff2b] hover:border-r-3 hover:border-(--color-primary) transition-[background-color] duration-150"
                >
                  <img src={home_icon} alt="Icon" />
                  Dashboard
                </Link>

                <Link
                  to="/doctor/appointments"
                  className="flex gap-2 py-3 pl-6 hover:bg-[#5f6fff2b] hover:border-r-3 hover:border-(--color-primary) transition-[background-color] duration-150"
                >
                  <img src={appointment_icon} alt="Icon" />
                  Appointments
                </Link>
                <Link
                  to="/doctor/profile"
                  className="flex gap-2 py-3 pl-6 hover:bg-[#5f6fff2b] hover:border-r-3 hover:border-(--color-primary) transition-[background-color] duration-150"
                >
                  <img src={people_icon} alt="Icon" />
                  Profile
                </Link>
              </nav>
            </aside>
            <section className="content flex-10/12 bg-[#f5f4f4ec] p-4">
              <Outlet />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default DashboardLayout;
