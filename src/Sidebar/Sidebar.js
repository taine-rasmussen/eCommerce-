import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { AiOutlineShoppingCart, AiOutlineCalendar, AiOutlineFormatPainter } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdPeopleOutline } from 'react-icons/md'
import { BsLayoutTextSidebarReverse, BsKanban } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'
import './Sidebar.css'


const Sidebar = (props) => {
  const {
    setActiveMenu,
    activeMenu
  } = props

  const dashboard = [
    { title: 'Ecommerce', icon: <HiOutlineShoppingBag /> }
  ];
  const pages = [
    { title: 'Orders', icon: <AiOutlineShoppingCart /> },
    { title: 'Employees', icon: <MdPeopleOutline /> },
    { title: 'Customers', icon: <BsLayoutTextSidebarReverse /> }
  ];
  const apps = [
    { title: 'Calender', icon: <AiOutlineCalendar /> },
    { title: 'KanBan', icon: <BsKanban /> },
    { title: 'Editor', icon: <FaRegEdit /> },
    { title: 'Orders', icon: <AiOutlineFormatPainter /> }
  ]

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
      { title: 'Orders', icon: <AiOutlineFormatPainter /> }
    ]
  ]


  return (
    <div className='sidebar_container'>
      <GiHamburgerMenu
        className='menu_icon'
        onClick={() => setActiveMenu(!activeMenu)}
      />
      <div className='sidebar_header'>
        header goes here
      </div>

      <div
        className='sidebar_menu_container'
      >
        {sidebarData.map((section, i) => {
          return (
            <div className='sidebar_section' key={i}>
              {i == 0 ? <h2>Ecommerce</h2> : i == 1 ? <h2>Pages</h2> : <h2>Apps</h2>}
              {section.map((data) => (
                <div className='sidevbar_content' key={data.title}>
                  {data.icon}
                  {data.title}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div >
  )
}

export default Sidebar
