import React from 'react'

export default function MoodInput({ value, onChange }) {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        className="w-[500px] mt-12 h-12 bg-[#4d3224] border border-transparent rounded-[8px] text-white placeholder-white focus:outline-none focus:border-transparent focus:ring-0"
        type="text"
        placeholder="Describe your mood"
      />
    </div>
  )
}
