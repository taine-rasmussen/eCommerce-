import { useState, useEffect } from 'react'
import { AdminContext } from './AdminContext'
import SettingsMenu from './SettingsMenu/SettingsMenu'
import Sidebar from './Sidebar/Sidebar'
import Body from './Body/Body'
import './index.css'

function App() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [activeSettings, setActiveSettings] = useState(false)

  return (
    <AdminContext.Provider value={{ activeMenu, setActiveMenu, activeSettings, setActiveSettings, handleToggle }}>
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
        {activeSettings
          ? (
            <SettingsMenu />
          ) : (
            <div className='no_active_menu'>

            </div>
          )}
      </div >
    </AdminContext.Provider>
  );
}

export default App;

