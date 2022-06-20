import { GiHamburgerMenu } from 'react-icons/gi'
import { useContext } from 'react'
import { AdminContext } from '../AdminContext'

const SidebarHamburger = () => {
  const {
    activeMenu,
    setActiveMenu
  } = useContext(AdminContext);

  return (
    <>
      <GiHamburgerMenu
        className='menu_icon'
        onClick={() => setActiveMenu(!activeMenu)}
      />
    </>
  )
}

export default SidebarHamburger
