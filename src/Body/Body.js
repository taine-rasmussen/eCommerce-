import { FiSettings } from 'react-icons/fi'
import { Routes, Route } from "react-router-dom";
import ColourPicker from '../ColourPicker/ColourPicker'
import Ecommerce from '../Ecommerce/Ecommerce'
import Customers from '../Customers/Customers'
import Employees from '../Employees/Employees'
import Calender from '../Calender/Calender'
import Orders from '../Orders/Orders'
import KanBan from '../KanBan/KanBan'
import Editor from '../Editor/Editor'
import React from 'react'
import './Body.css'

const Body = () => {
  return (
    <div className='body_container'>
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
        <FiSettings className='icon' />
      </div>
    </div>
  )
}

export default Body
