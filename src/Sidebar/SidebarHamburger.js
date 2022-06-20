import { GiHamburgerMenu } from 'react-icons/gi'
import { AdminContext } from '../AdminContext'
import { useContext } from 'react'

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
