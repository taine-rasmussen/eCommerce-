import { useState } from 'react'
import './index.css'
import Sidebar from './Sidebar/Sidebar'
import SidebarHamburger from './Sidebar/SidebarHamburger'
import Body from './Body/Body'

function App() {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <div className="app">
      {activeMenu
        ? (
          <Sidebar
            setActiveMenu={setActiveMenu}
            activeMenu={activeMenu}
          />
        ) : (
          <div className="no_active_menu">

          </div>
        )
      }
      <Body />
      <SidebarHamburger
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
    </div >
  );
}

export default App;
