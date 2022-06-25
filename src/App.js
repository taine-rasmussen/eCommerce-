import { AdminContext } from './AdminContext'
import { useState, useMemo } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Body from './Body/Body'
import './index.css'

function App() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [activeSettings, setActiveSettings] = useState(false)
  const [activeTheme, setActiveTheme] = useState('#FF5B8E')

  return (
    <AdminContext.Provider
      value={
        {
          setActiveSettings,
          setActiveTheme,
          activeSettings,
          setActiveMenu,
          activeTheme,
          activeMenu
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