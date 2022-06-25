import { useContext, useCallback } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AdminContext } from '../AdminContext'

const SidebarHamburger = () => {
  const {
    activeMenu,
    setActiveMenu,
    activeSettings,
    setActiveSettings
  } = useContext(AdminContext);

  const toggleSidebar = useCallback(
    () => {
      setActiveMenu(!activeMenu);
    }, [activeMenu])

  return (
    <>
      <GiHamburgerMenu
        className='menu_icon'
        onClick={toggleSidebar}
        style={{ color: '#FF5B8E' }}
      />
    </>
  )
}

export default SidebarHamburger
