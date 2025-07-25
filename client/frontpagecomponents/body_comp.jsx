import React from 'react';
import { Link } from 'react-router-dom';

export default function Body_comp() {
  return (
    <div className="relative w-[95%] max-w-[1000px] mx-auto mt-[120px] rounded-2xl overflow-hidden h-[600px] sm:h-[550px] md:h-[500px]">
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center brightness-50'
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLmb-D5z3nfXo3wNUZbmR3_GIr45i2-AbVQZ8qIGbs_yTE-AyuhSsyI1Ce1ZidA9UzGtq3wmhNJo7bNBeBaeb3mtfZFSqgMWAwTNkb15BzAQqBdi5JuxzLNysCg--Keaugy2K4NNapXLR-pLXZ8NEDUN8prjkAsblNqlAdtAS3CskW5p3OR1kKsCaph8TlR3y2Phkk-ay0CMNCDtmQKM-Apnb8eLX_dpCzN4gHtbMTEJ7Du-qC_8v9r-lnFl4woywLJhWT6mzYxm0")`
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 md:px-10">
        <p className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
          TuneIn: Music for Every Mood
        </p>

        <p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
          Discover the perfect soundtrack for your day. Whether you're feeling happy, sad, energetic, or relaxed,
          TuneIn uses AI to recommend music from Spotify that matches your mood.
          Simply tell us how you feel or upload a selfie, and let the music <br />
          <span className="italic">begin</span>.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/Mood">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm sm:text-base transition">
              Type your mood
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
