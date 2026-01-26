import React from "react";
import upload_area from "../../assets/upload_area.svg";
import { useState } from "react";
import adminApi from "../../api/adminApi";

const AdminAddDoctor = () => {
  const [form, setForm] = useState({
    profile_image: "",
    name: "",
    email: "",
    password: "",
    speciality: "General Physician",
    degree: "",
    experience: "1",
    address: "",
    fees: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });

      const res = await adminApi.post("/admin/add-doctor", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(res);

      setForm({
        profile_image: "",
        name: "",
        email: "",
        password: "",
        speciality: "General Physician",
        degree: "",
        experience: "1",
        address: "",
        fees: "",
        description: "",
      });
    } catch (error) {
      console.log(error.response?.data?.message || "Adding failed");
    }
  };

  return (
    <div className="add-doctor">
      <h2 className="text-2xl font-semibold mb-6 hidden md:block">
        Add Doctor
      </h2>

      <div className="bg-white p-8 rounded-xl shadow-sm w-full lg:w-[80%]">
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          <div className="col-span-2">
            <label className="block mb-1 font-medium" htmlFor="profile_image">
              Profile Picture
            </label>

            <label
              htmlFor="profile_image"
              className="w-32 h-32 border border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50"
            >
              <img src={upload_area} alt="Upload" className="w-16 opacity-70" />
            </label>

            <input
              type="file"
              id="profile_image"
              className="hidden"
              name="profile_image"
              onChange={(e) =>
                setForm({ ...form, profile_image: e.target.files[0] })
              }
            />
          </div>

          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Doctor's Name"
              className="input-field border px-2 py-1 rounded border-[#DADADA]"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Doctor's Email"
              className="input-field border px-2 py-1 rounded border-[#DADADA]"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Set Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Doctor's Password"
              className="input-field border px-2 py-1 rounded border-[#DADADA]"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="speciality" className="block mb-1 font-medium">
              Speciality
            </label>
            <select
              id="speciality"
              name="speciality"
              className="input-field border border-gray-300 rounded-lg px-3 py-1 min-w-[230px] bg-white 
             text-gray-700"
              value={form.speciality}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            >
              <option value="General Physician">General Physician</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="pediatrician">pediatrician</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Gastroenterologist">Gastroenterologist</option>
            </select>
          </div>

          <div>
            <label htmlFor="degree" className="block mb-1 font-medium">
              Degree
            </label>
            <input
              type="text"
              id="degree"
              name="degree"
              placeholder="Doctor's Degree"
              className="input-field border px-2 py-1 rounded border-[#DADADA]"
              value={form.degree}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="experience" className="block mb-1 font-medium">
              Experience
            </label>
            <select
              id="experience"
              name="experience"
              className="input-field input-field border border-gray-300 rounded-lg px-3 py-1 bg-white 
             text-gray-700  min-w-[230px]"
              value={form.experience}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            >
              {[...Array(10)].map((_, i) => (
                <option key={i} value={(i + 1).toString()}>
                  {i + 1} Year{i + 1 > 1 ? "s" : ""}
                </option>
              ))}
              <option value="+10">10+ Years</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              className="input-field mb-2 border px-2 py-1 rounded border-[#DADADA]"
              value={form.address}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="fees" className="block mb-1 font-medium">
              Fees
            </label>
            <input
              type="number"
              id="fees"
              min={0}
              name="fees"
              placeholder="Doctor's Fees"
              className="input-field border px-2 py-1 rounded border-[#DADADA]"
              value={form.fees}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className="col-span-2">
            <label htmlFor="about" className="block mb-1 font-medium">
              About Doctor
            </label>
            <textarea
              id="about"
              name="about"
              placeholder="Write about doctor"
              className="h-40 p-3 border rounded-lg border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.about}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            ></textarea>
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="bg-(--color-primary) text-white px-6 py-2 rounded-lg cursor-pointer"
            >
              Add Doctor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminAddDoctor;
