import { AdminContext } from './AdminContext'
import SettingsMenu from './SettingsMenu/SettingsMenu'
import { useState, useEffect } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Body from './Body/Body'
import './index.css'

function App() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSettings, setActiveSettings] = useState(true)

  return (
    <AdminContext.Provider value={{ activeMenu, setActiveMenu, activeSettings, setActiveSettings }}>
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

