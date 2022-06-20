import { Routes, Route } from "react-router-dom";
import React from 'react'
import Ecommerce from '../Ecommerce/Ecommerce'
import Orders from '../Orders/Orders'
import Employees from '../Employees/Employees'
import Customers from '../Customers/Customers'
import Calender from '../Calender/Calender'
import KanBan from '../KanBan/KanBan'
import Editor from '../Editor/Editor'
import ColourPicker from '../ColourPicker/ColourPicker'


const Body = () => {
   return (
      <div>
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
