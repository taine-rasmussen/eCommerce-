import { AdminContext } from './AdminContext'
import SettingsMenu from './SettingsMenu/SettingsMenu'
import { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Body from './Body/Body'
import './index.css'
// use state with titles to help for routing
// use  api to generate dummy data, names etc...
function App() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [activeSettings, setActiveSettings] = useState(false)

  return (
    <AdminContext.Provider value={{ activeMenu, setActiveMenu }}>
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

// Create settings menu component
// Check how sidebar is setting width
// render component conditionally using activeSettings
// Function that flips activeSettings - add it to state?
// create state object? YT vid?
