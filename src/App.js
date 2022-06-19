import { useState } from 'react'
import './index.css'
import { GiHamburgerMenu } from 'react-icons/gi'

function App() {

  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className="app">
      {activeMenu
        ? (
          <div
            className="active_menu"
            style={{ backgroundColor: '#fff' }}
          >
            <GiHamburgerMenu
              onClick={() => setActiveMenu(!activeMenu)}
            />
          </div>
        ) : (
          <div className="no_active_menu">
            <GiHamburgerMenu
              onClick={() => setActiveMenu(!activeMenu)}
            />
          </div>
        )
      }
    </div>
  );
}

export default App;
