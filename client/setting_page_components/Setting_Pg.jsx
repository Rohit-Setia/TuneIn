import React, { useState } from "react";

export default function Setting_Pg() {
  const [enable, setEnabled] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#231810] flex flex-col items-center gap-10 p-6 text-white overflow-y-auto">
      {/* Header */}
      <div className="w-full max-w-6xl text-center md:text-left">
        <h1 className="text-4xl font-bold">Settings</h1>
        <p className="text-2xl mt-4 text-gray-300">Account</p>
      </div>

      {/* Connect to Music Services */}
      <div className="w-full max-w-6xl bg-white/5 backdrop-blur-md rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border border-white/10">
        {/* Icon + Text */}
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center bg-[#493222] rounded-xl p-3 w-12 h-12 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26px"
              height="26px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V98.75l69.7,20.91A8,8,0,0,0,216,112V64A8,8,0,0,0,210.3,56.34ZM88,216a32,32,0,1,1,32-32A32,32,0,0,1,88,216ZM200,101.25l-64-19.2V50.75L200,70Z"></path>
            </svg>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Connect to Music Services</h2>
            <p className="text-gray-400 text-base">
              Connect your account to enjoy personalized music recommendations.
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="bg-orange-500  hover:bg-orange-600 hover:to-yellow-600 px-6 py-2 rounded-lg font-semibold text-black self-center md:self-auto transition">
          Connect
        </button>
      </div>

      {/* Notifications Section */}
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-6">Notifications</h2>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border border-white/10">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center bg-[#493222] rounded-xl p-3 w-12 h-12 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26px"
                height="26px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
              </svg>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Push Notifications</h2>
              <p className="text-gray-400 text-base">
                Enable push notifications to receive updates and recommendations.
              </p>
            </div>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setEnabled(!enable)}
            className={`relative w-14 h-7 rounded-full transition-all duration-500 ${
              enable ? "bg-orange-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-0.5 w-6 h-6 rounded-full transition-all duration-500 ${
                enable
                  ? "right-0.5 bg-white"
                  : "left-0.5 bg-[#1e140d]"
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* App Information Section */}
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-6">App Information</h2>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 space-y-6 border border-white/10 text-lg">
          <div className="flex justify-between">
            <span>Version</span>
            <span className="text-gray-300">1.0.0</span>
          </div>
          <div className="flex justify-between hover:text-orange-400 cursor-pointer">
            <span>Privacy Policy</span>
            <span>→</span>
          </div>
          <div className="flex justify-between hover:text-orange-400 cursor-pointer">
            <span>Terms of Service</span>
            <span>→</span>
          </div>
          <div className="flex justify-between hover:text-orange-400 cursor-pointer">
            <span>Contact Us</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}
