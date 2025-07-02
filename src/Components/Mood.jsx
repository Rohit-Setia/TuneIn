import React from 'react'
import pathToSvg from '../Assets/settingicon.svg'
import Logo from '../Assets/logo.svg'
export default function Mood() {
  return (
    <div>
        
      <div className="relative flex size-full  flex-col bg-[#231810] dark group/design-root overflow-x-hidden" style={{fontfamily:'"Spline Sans", "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5"> 
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">How are you feeling today?</h2>
            <div className="flex  flex-wrap items-end gap-4 px-4 py-3 justify-center item-center">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Describe your mood"
                  
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#493222] focus:border-none h-14 placeholder:text-[#cba990] p-4 text-base font-normal leading-normal  "

                />
              </label>
            </div>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">Or, let us analyze your mood from a selfie</p>
            <div className="flex flex-col p-4">
              <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#684831] px-6 py-14">
                <div className="flex max-w-[480px] flex-col items-center gap-2">
                  <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">Upload a selfie</p>
                  <p className="text-white text-sm font-normal leading-normal max-w-[480px] text-center">We'll analyze your mood from your expression</p>
                </div>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#493222] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Upload</span>
                </button>
              </div>
            </div>
            <div className="flex px-4 py-3 justify-center">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f26c0c] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
