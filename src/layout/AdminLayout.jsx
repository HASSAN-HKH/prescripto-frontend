import React from "react";
import { Link } from "react-router-dom";

const AdminLayout = ({ page, form, onSubmit, onChange }) => {
  return (
    <div className="layout">
      <div>
        <div className="flex justify-center items-center min-h-[80vh]">
          <form
            className="flex flex-col gap-3 bg-white min-w-96 p-8 rounded-2xl text-[#5E5E5E] shadow-lg text-sm border-[#e5e7eb] border"
            onSubmit={onSubmit}
          >
            <h1 className="text-2xl font-semibold text-center mb-2">
              <span className="text-(--color-primary)">{page}</span> Login
            </h1>

            <div className="email flex flex-col gap-1 ">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                placeholder="Email"
                className="border p-2 rounded border-[#DADADA] "
                value={form.email}
                onChange={onChange}
              />
            </div>

            <div className="password flex flex-col gap-1">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="border p-2 rounded border-[#DADADA] "
                value={form.password}
                onChange={onChange}
              />
            </div>

            <button className="bg-[#5F6FFF] text-white p-2 rounded  text-base cursor-pointer">
              Login
            </button>

            <div>
              {page === "Doctor" ? "Admin Login?" : "Doctor Login?"}
              <Link
                to={`/${page === "Doctor" ? "admin" : "doctor"}/login`}
                className="text-[#5F6FFF] underline pl-1"
              >
                Click here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
