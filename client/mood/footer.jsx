import React from 'react';

export default function Footer() {
  return (
    <div className="w-full bg-[#231810] border-t-2 border-gray-800 py-3 text-white flex flex-col items-center gap-4">
      
      {/* Footer Navigation Links */}
      <ul className="w-full flex flex-wrap justify-center items-center gap-20 md:gap-40 text-center list-none">
        <li><a href="#" className="text-white text-base hover:underline">Privacy Policy</a></li>
        <li><a href="#" className="text-white text-base hover:underline">Terms of Service</a></li>
        <li><a href="#" className="text-white text-base hover:underline">Contact Us</a></li>
      </ul>

      {/* Social Icons (or placeholders) */}
      <ul className="flex justify-center items-center gap-4 sm:gap-6 text-white list-none">
        <li><a href="#" className="text-lg sm:text-xl hover:text-orange-400">Icon 1</a></li>
        <li><a href="#" className="text-lg sm:text-xl hover:text-orange-400">Icon 2</a></li>
        <li><a href="#" className="text-lg sm:text-xl hover:text-orange-400">Icon 3</a></li>
      </ul>

      {/* Footer Text */}
      <p className="text-sm sm:text-base text-center mt-2">@2024 TuneIn. All rights reserved</p>
    </div>
  );
}
