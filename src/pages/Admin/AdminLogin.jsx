import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import useAuthAdminStore from "../../store/authAdminStore";
import { useNavigate } from "react-router-dom";
import adminApi from "../../api/adminApi";
import { useState } from "react";

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const login = useAuthAdminStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await adminApi.post("/admin/login", form);
      const { role, token } = res.data;
      login({ role }, token);
      navigate("/admin/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <AdminLayout
        page="Admin"
        onSubmit={handleSubmit}
        form={form}
        onChange={handleChange}
      />
    </div>
  );
};

export default AdminLogin;
