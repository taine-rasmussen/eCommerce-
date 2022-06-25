import { AdminContext } from './AdminContext'
import { useState, useMemo } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Body from './Body/Body'
import './index.css'

function App() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [activeSettings, setActiveSettings] = useState(false)
  const [
    theme,
    setTheme] = useState([
      { colour: '#fb9677', active: false },
      { colour: '#1E4DB6', active: false },
      { colour: '#FF5B8E', active: true },
      { colour: '#7351FF', active: false },
      { colour: '#02C9D6', active: false },
      { colour: '#1897F5', active: false },
    ])

  const activeTheme = useMemo(
    () => {
      return theme.filter(colour => colour.active === true)[0].colour
    }, [theme, setTheme]
  )

  return (
    <AdminContext.Provider
      value={
        {
          setActiveSettings,
          activeSettings,
          setActiveMenu,
          activeTheme,
          activeMenu,
          setTheme,
          theme,
        }
      }>
      <div className="app">
        {activeMenu
          ? (
            <Sidebar />
          ) : (
            <div className="no_active_menu">

            </div>
          )
        }
        <Body />
      </div >
    </AdminContext.Provider>
  );
}

export default App;