import React from 'react'
import Logo from '../Assets/logo.svg'
import settingicon from '../Assets/settingicon.svg'
export default function Header() {
  return (
    <div>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#4a3221] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-6">
              <img src={Logo} alt="Your Logo SVG" />
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">TuneIn</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal" href="#">Home</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">About</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Contact</a>
            <div className="text-white" data-icon="Gear" data-size="10px" data-weight="regular">
              <img src={settingicon} alt="Your SVG" />
              </div>
            </div>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f86b06] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Log In</span>
            </button>
          </div>
        </header>
    </div>
  )
}
