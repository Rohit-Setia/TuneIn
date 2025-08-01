import React, { useState } from 'react';
import axios from 'axios';

export default function LogIn_Pg() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false); // 👁️ Toggle state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/login', formData);
      alert(res.data.message + " Login successful");
    } catch (err) {
      alert(err.response?.data?.error + " Login failed" || 'Login failed');
    }
  };

  return (
    <div className="h-[500px] mt-[100px] ml-8 w-screen bg-transparent flex justify-center items-center px-4">
      <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
        <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
          Log IN for free to start listening
        </h2>

        {["name", "age", "email"].map((field) => (
          <div key={field} className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                name={field}
                type={field === "age" ? "number" : "text"}
                placeholder={`What's your ${field}?`}
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#493222] h-14 placeholder:text-[#cba990] p-4 text-base font-normal leading-normal"
                onChange={handleChange}
              />
            </label>
          </div>
        ))}

        {/* Password field with eye toggle */}
        <div className="flex max-w-[480px] items-center gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1 relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="What's your password?"
              className="form-input w-full rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#493222] h-14 placeholder:text-[#cba990] p-4 text-base font-normal"
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-white"
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? " 👁️" : "🙈"}
            </button>
          </label>
        </div>

        <div className="flex flex-col items-center justify-center px-4 py-3">
          <button
            type="submit"
            onClick={handleLogin}
            className="min-w-[84px] text-[20px] w-full max-w-[100px] cursor-pointer items-center justify-center rounded-full h-10 bg-[#f26c0c] text-white text-sm ml-0"
          >
            LogIn
          </button>
        </div>
      </div>
    </div>
  );
}
