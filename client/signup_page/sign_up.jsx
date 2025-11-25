import { useState, React } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sign_up() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/users", {
        name,
        email,
        age: Number(age),
        password,
      });
      console.log(" User added:", response.data);
      alert("User saved to DB!");
      setName("");
      setEmail("");
      setAge("");
      setPassword("");
    } catch (error) {
      console.error(
        " Error saving user:",
        error.response?.data || error.message
      );
      alert(error.response?.data?.error || `Failed to save user.`);
    }
  };

  return (
    <>
      <div className="h-[500px] mt-[100px] w-screen bg-transparent flex justify-center items-center px-4">
        <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
          <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
            Sign up for free to start listening
          </h2>

          {/* Name Input */}
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                placeholder="What's your name?"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#493222] h-14 placeholder:text-[#cba990] p-4 text-base font-normal leading-normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>

          {/* Age Input */}
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                placeholder="What's your age?"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#493222] h-14 placeholder:text-[#cba990] p-4 text-base font-normal leading-normal"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
          </div>

          {/* Email Input */}
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                placeholder="What's your email?"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#493222] h-14 placeholder:text-[#cba990] p-4 text-base font-normal leading-normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          {/* Password Input */}
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                placeholder="Create a password"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#493222] h-14 placeholder:text-[#cba990] p-4 text-base font-normal leading-normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          {/* Button + Link */}
          <div className="flex items-center justify-center px-4 pt-4 gap-8">
            <button className="min-w-[84px] w-full max-w-[100px] cursor-pointer items-center justify-center rounded-full h-10 bg-[#f26c0c] text-white text-sm font-bold translate-x-[-15px]">
              <span onClick={handleSubmit} className="truncate">
                Sign up
              </span>
            </button>

            <div className="flex gap-3 items-center">
              <p className="text-white text-md whitespace-nowrap">
                Already have an account?
              </p>

              <button className="min-w-[84px] w-full max-w-[100px] cursor-pointer items-center justify-center rounded-full h-10 bg-[#231810] border border-[#f26c0c] hover:bg-[#f26c0c] text-white text-sm font-bold">
                <span className="truncate">
                  <Link to="/LogIn_Pg">LogIn</Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
