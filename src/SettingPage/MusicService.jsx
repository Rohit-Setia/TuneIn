import React from 'react'
import './MusicService.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

export default function MusicService() {
  return (
    <div className="music-service-container">
      <div className="icon-box">
        <FontAwesomeIcon icon={faMusic} />
      </div>
      <div className="text-content">
        <h3>Connect to Music Service</h3>
        <p>Connect your account to enjoy personalized music recommendations.</p>
      </div>
      <button className="connect-button">Connect</button>
    </div>
  )
}
