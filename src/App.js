import { Routes, Route, Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import './index.css'
// Components
import Sidebar from './Sidebar/Sidebar'
import Ecommerce from './Ecommerce/Ecommerce'
import Orders from './Orders/Orders'
import Employees from './Employees/Employees'
import Customers from './Customers/Customers'
import Calender from './Calender/Calender'
import KanBan from './KanBan/KanBan'
import Editor from './Editor/Editor'
import ColourPicker from './ColourPicker/ColourPicker'

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
            <GiHamburgerMenu
              className='menu_icon'
              onClick={() => setActiveMenu(!activeMenu)}
            />
          </div>
        )
      }
      <GiHamburgerMenu
        className='menu_icon'
        onClick={() => setActiveMenu(!activeMenu)}
      />
    </div >
  );
}

export default App;
