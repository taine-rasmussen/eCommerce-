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

const Body = () => {
   return (
      <div className='body'>
         <Routes>
            <Route path="/" element={<Ecommerce />} />
            <Route path="orders" element={<Orders />} />
            <Route path="Employees" element={<Employees />} />
            <Route path="Customers" element={<Customers />} />
            <Route path="Calender" element={<Calender />} />
            <Route path="KanBan" element={<KanBan />} />
            <Route path="Editor" element={<Editor />} />
            <Route path="ColourPicker" element={<ColourPicker />} />
         </Routes>
      </div>
   )
}

export default Body
