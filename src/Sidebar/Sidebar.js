import { AiOutlineShoppingCart, AiOutlineCalendar, AiOutlineFormatPainter } from 'react-icons/ai'
import { BsLayoutTextSidebarReverse, BsKanban } from 'react-icons/bs'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { MdPeopleOutline } from 'react-icons/md'
import { IoLogoIonic } from 'react-icons/io'
import { FaRegEdit } from 'react-icons/fa'
import './Sidebar.css'


const Sidebar = (props) => {
  const {
    setActiveMenu,
    activeMenu
  } = props

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
      <div className='sidebar_header'>
        <IoLogoIonic
          style={{ fontSize: '2rem', color: '#fb9677' }}
          onClick={() => setActiveMenu(!activeMenu)}
        />
        <h2>Shoppy</h2>
      </div>
      <div
        className='sidebar_menu_container'
      // use state for titles to help with routing ??
      // use  api to generate dummy data, names etc...
      >
        {sidebarData.map((section, i) => {
          return (
            <div className='sidebar_section' key={i}>
              {i == 0 ? <h2>DASHBOARD</h2> : i == 1 ? <h2>PAGES</h2> : <h2>APPS</h2>}
              {section.map((data) => (
                <div className='sidebar_content' key={data.title}>
                  <div className='sidebar_item'>
                    {data.icon}
                  </div>
                  <div className='sidebar_item'>
                    {data.title}
                  </div>
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
