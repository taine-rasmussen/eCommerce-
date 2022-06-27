import { useContext, useCallback, useMemo } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { AiOutlineCheck } from 'react-icons/ai'
import { AdminContext } from '../AdminContext'
import './SettingsMenu.css'

const SettingsMenu = () => {

  const {
    setActiveSettings,
    activeTheme,
    setActiveTheme,
  } = useContext(AdminContext)

  const colours = ['#fb9677', '#1E4DB6', '#FF5B8E', '#7351FF', '#02C9D6', '#1897F5']

  const updateActiveTheme = useCallback(
    (colour) => {
      setActiveTheme(colour)
    }, [activeTheme]
  )

  return (
    <div className="settings_container">
      <div className="settings_header">
        <div className="settings_header_title">
          <h2>Settings</h2>
        </div>
        <div className="settings_header_icon">
          <AiOutlineCloseCircle
            className="settings_icon"
            onClick={() => { setActiveSettings(false) }}
            style={{ color: activeTheme }}
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
              <span className="checkmark">Light</span>
            </li>
            <li>
              <input type="checkbox" />
              <span className="checkmark">Dark</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="settings_colours">
        <div className="settings_title">
          <h2>Theme Colours</h2>
        </div>
        <div className="settings_colours_container">
          {colours.map((colour) => {
            return (
              <div
                className="settings_colour"
                key={colour}
                style={{ background: colour }}
                onClick={() => { updateActiveTheme(colour) }}
              >
                {colour === activeTheme ? <AiOutlineCheck /> : null}
              </div>
            )
          })}
        </div >
      </div >
    </div >
  )
}

export default SettingsMenu
