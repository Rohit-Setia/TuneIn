import React from 'react'

export default function MoodInput({ value, onChange }) {
  return (
    <div className="w-full flex justify-center">
      <input
        value={value}
        onChange={onChange}
        className="w-full max-w-[400px] mt-8 h-12 bg-[#4d3224] border border-transparent rounded-[8px] text-white placeholder-white focus:outline-none focus:ring-0 px-4"
        type="text"
        placeholder="Describe your mood"
      />
    </div>
  )
}
