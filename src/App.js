import { AdminContext } from './AdminContext'
import { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Body from './Body/Body'
import './index.css'

function App() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [activeSettings, setActiveSettings] = useState(false)

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
      </div >
    </AdminContext.Provider>
  );
}

export default App;

