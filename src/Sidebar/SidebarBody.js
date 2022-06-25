import { AdminContext } from '../AdminContext'
import { IoLogoIonic } from 'react-icons/io'
import { useCallback } from 'react'
import { useContext } from 'react'
import { Link } from "react-router-dom";

const SidebarBody = (props) => {

  const {
    sidebarData
  } = props;

  const {
    activeMenu,
    setActiveMenu,
    activeSettings,
    setActiveSettings
  } = useContext(AdminContext)

  const toggleSettings = useCallback(
    () => {
      setActiveSettings(!activeSettings)
    }, [activeSettings, setActiveSettings]
  )

  return (
    <>
      <div className='sidebar_header'>
        <IoLogoIonic
          style={{ fontSize: '2rem', color: '#fb9677' }}
          onClick={() => setActiveMenu(!activeMenu)}
        />
        <h2>Shoppy</h2>
      </div>
      <div
        className='sidebar_menu_container'
      >
        {sidebarData.map((section, i) => {
          return (
            <div className='sidebar_section' key={i}>
              { i === 0 ? <h2>DASHBOARD</h2> : null}
              { i === 1 ? <h2>PAGES</h2> : null}
              { i === 2 ? <h2>APPS</h2> : null}
              { i === 3 ? <h2>SETTINGS</h2> : null}
              {section.map((data) => {
                if (data.title == 'Settings') {
                  return (
                    <div
                      className='sidebar_content'
                      onClick={toggleSettings}
                      key={data.title}
                    >
                      <div className='sidebar_item'>
                        {data.icon}
                      </div>
                      <div className='sidebar_item'>
                        {data.title}
                      </div>
                    </div>
                  )
                }
                return (
                  <>
                    <Link
                      to={data.title.toLowerCase()}
                      style={{ textDecoration: 'none' }}
                    >
                      <div className='sidebar_content' key={data.title}>
                        <div className='sidebar_item'>
                          {data.icon}
                        </div>
                        <div className='sidebar_item'>
                          {data.title}
                        </div>
                      </div>
                    </Link>
                  </>
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SidebarBody
