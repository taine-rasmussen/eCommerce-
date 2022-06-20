import { AdminContext } from './AdminContext'
import { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Body from './Body/Body'
import './index.css'
// use state with titles to help for routing
// use  api to generate dummy data, names etc...
function App() {
  const [activeMenu, setActiveMenu] = useState(true);

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
      </div >
    </AdminContext.Provider>
  );
}

export default App;
