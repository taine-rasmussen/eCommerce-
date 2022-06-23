import { AiOutlineCloseCircle } from 'react-icons/ai'
import { AdminContext } from '../AdminContext'
import { useContext } from 'react'
import './SettingsMenu.css'

const SettingsMenu = () => {

  const {
    setActiveSettings,
  } = useContext(AdminContext)

  const themeColours = ['#000', '#000', '#000', '#000', '#000', '#000']

  return (
    <div className="settings_container">
      <div className="settings_header">
        <div className="settings_header_title">
          <h2>Settings</h2>
        </div>
        <div className="settings_header_icon">
          <AiOutlineCloseCircle
            className="icon"
            onClick={() => { setActiveSettings(false) }}
          />
        </div>
      </div>
      <div className="settings_theme">
        <div className="settings_title">
          <h2>Theme Options</h2>
        </div>
        <div className='settings_theme_options'>
          <ul>
            <li>
              <input type="checkbox" />
              <span class="checkmark">Light</span>
            </li>
            <li>
              <input type="checkbox" />
              <span class="checkmark">Dark</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="settings_colours">
        <div className="settings_title">
          <h2>Theme Colours</h2>
        </div>
        <div className="settings_colours_container">
          {themeColours.map((colour) => {
            return (
              <div
                className="settings_colour"
                style={{ background: colour }}
              >
                {/* use state to decide what circle to have SVGCheck in */}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SettingsMenu
