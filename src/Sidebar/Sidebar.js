import { AiOutlineShoppingCart, AiOutlineCalendar, AiOutlineFormatPainter } from 'react-icons/ai'
import { BsLayoutTextSidebarReverse, BsKanban } from 'react-icons/bs'
import { useContext, useCallback } from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BsFileEarmarkMusic } from 'react-icons/bs'
import { MdPeopleOutline } from 'react-icons/md'
import { AdminContext } from '../AdminContext'
import { FiSettings } from 'react-icons/fi'
import SidebarBody from './SidebarBody'
import SettingsMenu from './SettingsMenu'
import { FaRegEdit } from 'react-icons/fa'
import './Sidebar.css'



const Sidebar = () => {
  const {
    activeSettings,
    activeTheme,
    theme
  } = useContext(AdminContext)

  const sidebarData = [
    [
      { title: 'Ecommerce', icon: <HiOutlineShoppingBag /> }
    ],
    [
      { title: 'Calender', icon: <AiOutlineCalendar /> },
      { title: 'Employees', icon: <MdPeopleOutline /> },
      { title: 'Customers', icon: <BsLayoutTextSidebarReverse /> }
    ],
    [
      { title: 'Music', icon: <BsFileEarmarkMusic /> },
      { title: 'KanBan', icon: <BsKanban /> },
      { title: 'Editor', icon: <FaRegEdit /> },
      { title: 'Colour Picker', icon: <AiOutlineFormatPainter /> }
    ],
    [
      { title: 'Settings', icon: <FiSettings style={{ color: activeTheme }} /> }
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
