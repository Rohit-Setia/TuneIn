import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mood from './TempData/Mood';
import LogIn_pg from './frontpagecomponents/LogIn_pg';
import Navbar from './frontpagecomponents/navbar';
import Footer from './frontpagecomponents/footer';
import Body_comp from './frontpagecomponents/body_comp';
import Setting_Pg from './setting_page_components/Setting_Pg';
import Sign_up from './signup_page/sign_up';
import Songs from './Audius_Api/Songs';
import About from './aboutpage/about';
export default function App() {
  return (
    <>
    {/* <Rcnt_pld/>  */}
    <div className="h-screen bg-[#231810] w-screen flex flex-col overflow-hidden">
      
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>    
   <div className="flex-1 overflow-y-auto bg-[#231810] ">
        <Routes>
          <Route path="/" element={<Body_comp />} />
          <Route path="/Setting_Pg" element={<div className="flex-1 overflow-y-auto bg-[#231810] py-20"> <Setting_Pg /></div>} />
          <Route path="/about" element={<div className="flex-1 overflow-y-auto bg-[#231810] pb-20">
      <About />
    </div>} />
          <Route path="/Mood" element={<Songs />} />
          <Route path="/Sign_up" element={  <Sign_up/>} />
          <Route path ="/LogIn_Pg" element ={<LogIn_pg/>}/>
        </Routes>
      </div>
       <div className="fixed bottom-[-10px] w-full z-50">
        <Footer />
      </div>

</div>
</>
  );
}
