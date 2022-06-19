import { useState } from 'react'
import './index.css'
import { GiHamburgerMenu } from 'react-icons/gi'

// Components
import Sidebar from './Sidebar/Sidebar'

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
