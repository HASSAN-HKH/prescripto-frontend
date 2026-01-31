import { create } from "zustand";
import adminApi from "../api/adminApi";

const useDoctorsStore = create((set) => ({
  doctors: [],
  loading: false,

  fetchDoctors: async () => {
    set({ loading: true });
    try {
      const res = await adminApi.get("/admin/doctors");
      set({ doctors: res.data.data, loading: false });
    } catch (error) {
      set({ loading: false });
      alert(error.response?.data?.message || "Fetch failed");
    }
  },
}));

export default useDoctorsStore;
