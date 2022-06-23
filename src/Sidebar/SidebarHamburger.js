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
      if (activeSettings) {
        setActiveSettings(false);
        setActiveMenu(true);
      } else {
        setActiveMenu(!activeMenu);
      }
    }, [activeMenu])

  return (
    <>
      <GiHamburgerMenu
        className='menu_icon'
        onClick={toggleSidebar}
      />
    </>
  )
}

export default SidebarHamburger
