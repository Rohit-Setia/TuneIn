import React from 'react'
import './SubmitButton.css'
export default function SubmitButton({ onClick }) {
  return (
    <div>
      <button className="submit-btn" onClick={onClick}>
        Submit
      </button>
    </div>
  )
}
