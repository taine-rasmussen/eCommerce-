import { GiHamburgerMenu } from 'react-icons/gi'

const SidebarHamburger = (props) => {
  const {
    activeMenu,
    setActiveMenu
  } = props

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
