import { create } from "zustand";
import adminApi from "../api/adminApi";

const useAuthAdminStore = create((set) => ({
  admin: JSON.parse(localStorage.getItem("admin")) || null,
  token: localStorage.getItem("admin_token") || null,
  isAuthenticated: !!localStorage.getItem("admin_token"),

  login: (admin, token) => {
    localStorage.setItem("admin", JSON.stringify(admin)),
      localStorage.setItem("admin_token", token),
      set({
        admin,
        token,
        isAuthenticated: true,
      });
  },

  logout: async () => {
    try {
      await adminApi.post("/admin/logout");
      console.log("Logged out successfully");
    } catch (error) {
      console.log(error.response?.data?.message || "Logout failed");
    } finally {
      localStorage.removeItem("admin_token");
      localStorage.removeItem("admin");
      set({ admin: null, token: null, isAuthenticated: false });
    }
  },
}));

export default useAuthAdminStore;
