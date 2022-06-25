import { useContext, useCallback } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { AiOutlineCheck } from 'react-icons/ai'
import { AdminContext } from '../AdminContext'
import './SettingsMenu.css'

const SettingsMenu = () => {

  const {
    setActiveSettings,
    activeTheme,
    setTheme,
    theme
  } = useContext(AdminContext)

  const updateActiveTheme = useCallback(
    (newTheme) => {
      theme.map((obj) => {
        if (obj.colour = activeTheme) {
          setTheme([...theme], obj.active = false)
        }
        if (obj.colour == newTheme.colour) {
          setTheme([...theme], obj.active = true)
        }
      })
    }, [theme, setTheme, activeTheme])


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
          {theme.map((col) => {
            const {
              colour,
              active
            } = col

            return (
              <div
                className="settings_colour"
                key={colour}
                style={{ background: colour }}
                onClick={() => { updateActiveTheme(col) }}
              >
                {active === true ? <AiOutlineCheck /> : null}
              </div>
            )
          })}
        </div >
      </div >
    </div >
  )
}

export default SettingsMenu
