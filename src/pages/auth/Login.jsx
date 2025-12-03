import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";
import useAuthStore from "../../store/authStore";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", form);
      const { user, token } = res.data;
      login(user, token);
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-[80vh]">
        <form
          className="flex flex-col gap-3 bg-white min-w-96 p-8 rounded-2xl text-[#5E5E5E] shadow-lg text-sm border-[#e5e7eb] border"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold ">Login</h1>
          <p>Please log in to book appointment</p>

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
            Login
          </button>
          <div className="loginHere">
            Create an new account?{" "}
            <Link to="/register" className="text-[#5F6FFF] underline">
              Click here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
