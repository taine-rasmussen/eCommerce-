import { useState } from 'react'
import './index.css'
import { GiHamburgerMenu } from 'react-icons/gi'

// Components
import Sidebar from './Sidebar/Sidebar'

function App() {

  const [activeMenu, setActiveMenu] = useState(false);

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
              onClick={() => setActiveMenu(!activeMenu)}
            />
          </div>
        )
      }
    </div >
  );
}

export default App;
