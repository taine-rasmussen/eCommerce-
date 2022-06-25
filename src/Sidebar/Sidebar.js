import { AiOutlineShoppingCart, AiOutlineCalendar, AiOutlineFormatPainter } from 'react-icons/ai'
import { BsLayoutTextSidebarReverse, BsKanban } from 'react-icons/bs'
import { useContext, useCallback } from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { MdPeopleOutline } from 'react-icons/md'
import { AdminContext } from '../AdminContext'
import SidebarBody from './SidebarBody'
import SettingsMenu from './SettingsMenu'
import { FaRegEdit } from 'react-icons/fa'
import './Sidebar.css'



const Sidebar = () => {
  const {
    activeMenu,
    setActiveMenu,
    activeSettings,
    setActiveSettings
  } = useContext(AdminContext)

  const sidebarData = [
    [
      { title: 'Ecommerce', icon: <HiOutlineShoppingBag /> }
    ],
    [
      { title: 'Orders', icon: <AiOutlineShoppingCart /> },
      { title: 'Employees', icon: <MdPeopleOutline /> },
      { title: 'Customers', icon: <BsLayoutTextSidebarReverse /> }
    ],
    [
      { title: 'Calender', icon: <AiOutlineCalendar /> },
      { title: 'KanBan', icon: <BsKanban /> },
      { title: 'Editor', icon: <FaRegEdit /> },
      { title: 'Colour Picker', icon: <AiOutlineFormatPainter /> }
    ]
  ]

  return (
    <div className='sidebar_container'>
      {!activeSettings
        ? (
          <SidebarBody
            sidebarData={sidebarData}
          />
        ) : (
          <SettingsMenu />
        )}
    </div >
  )
}

export default Sidebar
