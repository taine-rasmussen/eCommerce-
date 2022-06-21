import React, { useContext } from 'react'
import SidebarHamburger from '../Sidebar/SidebarHamburger'
import { Routes, Route } from "react-router-dom";
import { FiSettings } from 'react-icons/fi'
import { AdminContext } from '../AdminContext'
import ColourPicker from '../ColourPicker/ColourPicker'
import Ecommerce from '../Ecommerce/Ecommerce'
import Customers from '../Customers/Customers'
import Employees from '../Employees/Employees'
import Calender from '../Calender/Calender'
import Orders from '../Orders/Orders'
import KanBan from '../KanBan/KanBan'
import Editor from '../Editor/Editor'
import './Body.css'


const Body = () => {

  const {
    activeSettings,
    setActiveSettings
  } = useContext(AdminContext)


  return (
    <div className='body_container'>
      <div className='body_header'>
        <SidebarHamburger />
      </div>
      <div className='body_body'>
        <Routes>
          <Route path="ecommerce" element={<Ecommerce />} />
          <Route path="orders" element={<Orders />} />
          <Route path="Employees" element={<Employees />} />
          <Route path="Customers" element={<Customers />} />
          <Route path="Calender" element={<Calender />} />
          <Route path="KanBan" element={<KanBan />} />
          <Route path="Editor" element={<Editor />} />
          <Route path="ColourPicker" element={<ColourPicker />} />
        </Routes>
      </div>
      <div className="body_footer">
        <FiSettings
          className='menu_icon'
          onClick={() => { setActiveSettings(!activeSettings) }}
        />
      </div>
    </div>
  )
}

export default Body
