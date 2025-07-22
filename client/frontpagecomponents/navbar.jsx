import React from 'react';
import { Link } from 'react-router-dom';
import Setting_Pg from '../setting_page_components/Setting_Pg';


export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 border-b-2 border-gray-800 text-white text-2xl bg-[#231810]">
        <div className="flex items-center justify-between px-4 py-2 sm:py-3 md:py-4 md:px-10">
          {/* Left Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            <img src="assets/react.svg"  className="h-8 w-8 sm:h-10 sm:w-10 sm:border-black sm:bg-black" />
            <span className="text-lg sm:text-xl font-semibold">Tune In</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 md:gap-8 text-sm sm:text-base">
            <li className="hover:text-orange-400"> 
               <Link to="/">Home</Link>
               </li> 
           <li  className="hover:text-orange-400">
            <Link to="/">About</Link>
             </li>

             <li  className="hover:text-orange-400"> 
                <Link to="/">Contact</Link>
             </li>
            <span className="text-sm">
               <Link to="/Setting_Pg">Settings</Link></span>
            <button className="bg-orange-500 w-[80px] sm:w-[90px] h-[40px] sm:h-[45px] rounded-xl hover:bg-orange-600 text-sm sm:text-base">
             <Link to='/Sign_up' > Sign_up </Link >
            </button>
          </ul> 

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-xl">☰</button>
          </div>
        </div>

        
      </div>
    </>
  );
}
