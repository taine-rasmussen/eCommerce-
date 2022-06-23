import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './SettingsMenu.css'

const SettingsMenu = () => {
  return (
    <div className="settings_container">
      <div className="settings_header">
        <div className="settings_header_title">
          <h2>Settings</h2>
        </div>
        <div className="settings_header_icon">
          <AiOutlineCloseCircle className="icon" />
        </div>
      </div>
      <div className="settings_theme">

      </div>
      <div className="settings_colours">

      </div>
    </div>
  )
}

export default SettingsMenu
