import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useContext, useCallback } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { AdminContext } from '../AdminContext'
import './SettingsMenu.css'

const SettingsMenu = () => {

  const {
    setActiveSettings,
    getActiveTheme,
    setTheme,
    theme
  } = useContext(AdminContext)

  // const updateTheme = useCallback(
  //   (colour) => {
  //     setTheme(colour)
  //   }, [theme, setTheme]
  // )

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
            style={{ color: getActiveTheme ? getActiveTheme : '' }}
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
          {theme.map((col) => {
            const { colour } = col
            return (
              <div
                className="settings_colour"
                key={colour}
                style={{ background: colour }}
              // onClick={updateTheme(colour)}
              >
                {theme[0].colour === colour ? <AiOutlineCheck /> : null}
              </div>
            )
          })}
        </div >
      </div >
    </div >
  )
}

export default SettingsMenu
