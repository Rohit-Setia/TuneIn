import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mood from './mood/Mood';
import Navbar from './frontpagecomponents/navbar';
import Footer from './mood/footer';
import Body_comp from './frontpagecomponents/body_comp';
import Setting_Pg from './setting_page_components/Setting_Pg';
import Sign_up from './signup_page/sign_up';

export default function App() {
  return (
    <div className="h-screen bg-[#231810] w-screen flex flex-col overflow-hidden">
      
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>    
   <div className=" mb-[70px] overflow-y-auto bg-[#231810] h-[calc(100vh-160px)]">
        <Routes>
          <Route path="/" element={<Body_comp />} />
          <Route path="/Setting_Pg" element={<Setting_Pg />} />
          <Route path="/Mood" element={<Mood />} />
          <Route path="/Sign_up" element={  <Sign_up/>} />
        </Routes>
      </div>
       <div className="fixed bottom-[-10px] w-full z-50">
        <Footer />
      </div>
    </div>
  );
}
