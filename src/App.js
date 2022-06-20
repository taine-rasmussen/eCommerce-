import { useState } from 'react'
import './index.css'
// Components
import Sidebar from './Sidebar/Sidebar'
import SidebarHamburger from './Sidebar/SidebarHamburger'
import Ecommerce from './Ecommerce/Ecommerce'
import Orders from './Orders/Orders'
import Employees from './Employees/Employees'
import Customers from './Customers/Customers'
import Calender from './Calender/Calender'
import KanBan from './KanBan/KanBan'
import Editor from './Editor/Editor'
import ColourPicker from './ColourPicker/ColourPicker'
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
