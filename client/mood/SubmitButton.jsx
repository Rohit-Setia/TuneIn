import React from 'react'
import './SubmitButton.css'
export default function SubmitButton({ onClick }) {
  return (
    <div>
      <button className="submit-btn w-full max-w-[200px]" onClick={onClick}>
        Submit
      </button>
    </div>
  )
}
