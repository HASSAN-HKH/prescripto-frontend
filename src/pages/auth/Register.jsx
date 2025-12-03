import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/register", form);
      setForm({ name: "", email: "", password: "" });
    } catch (error) {
      console.log(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-[80vh]">
        <form
          className="flex flex-col gap-3 bg-white min-w-96 p-8 rounded-2xl text-[#5E5E5E] shadow-lg text-sm border-[#e5e7eb] border"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold ">Create Account</h1>
          <p>Please sign up to book appointment</p>
          <div className="name flex flex-col gap-1 ">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              placeholder="Full name"
              className="border p-2 rounded border-[#DADADA] "
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="email flex flex-col gap-1 ">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="Email"
              className="border p-2 rounded border-[#DADADA] "
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
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
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <button className="bg-[#5F6FFF] text-white p-2 rounded  text-base cursor-pointer">
            Create Account
          </button>
          <div className="loginHere">
            Already have an account?{" "}
            <Link to="/login" className="text-[#5F6FFF] underline">
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
