import { create } from "zustand";
import api from "../api/api";

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),

  login: (user, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    set({
      user: user,
      token: token,
      isAuthenticated: true,
    });
  },

  logout: async () => {
    try {
      await api.post("/logout");
      console.log("Logged out successfully");
    } catch (error) {
      console.log(error.response?.data?.message || "Logout failed");
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      set({ user: null, token: null, isAuthenticated: false });
    }
  },
}));

export default useAuthStore;
