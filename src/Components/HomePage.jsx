import React from "react";
import Mood from "./Mood.jsx";
export default function HomePage() {
  return (
    <div>
      <div className="relative flex size-full min-h-screen flex-col bg-[#231810] dark group/design-root overflow-x-hidden" style={{ fontFamily: `"Spline Sans", "Noto Sans", sans-serif` }}>
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="@container">
                <div className="@[480px]:p-4">
                  <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLmb-D5z3nfXo3wNUZbmR3_GIr45i2-AbVQZ8qIGbs_yTE-AyuhSsyI1Ce1ZidA9UzGtq3wmhNJo7bNBeBaeb3mtfZFSqgMWAwTNkb15BzAQqBdi5JuxzLNysCg--Keaugy2K4NNapXLR-pLXZ8NEDUN8prjkAsblNqlAdtAS3CskW5p3OR1kKsCaph8TlR3y2Phkk-ay0CMNCDtmQKM-Apnb8eLX_dpCzN4gHtbMTEJ7Du-qC_8v9r-lnFl4woywLJhWT6mzYxm0")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                      <div className="flex flex-col gap-2 text-center">
                    <h1
                      className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      TuneIn: Music for Every Mood
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Discover the perfect soundtrack for your day. Whether you're feeling happy, sad, energetic, or relaxed, TuneIn uses advanced AI to recommend music from
                      Spotify that matches your mood. Simply tell us how you feel or upload a selfie, and let the music begin.
                    </h2>
                  </div>
                  <div className="flex-wrap gap-3 flex justify-center">
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#f86b06] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                      onClick={()=> {<Mood/>}}
                    >
                      <span className="truncate">Type your mood</span>
                    </button>
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#4a3221] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                    >
                      <span className="truncate">Upload a selfie</span>
                    </button>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
