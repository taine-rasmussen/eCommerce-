import React from 'react'
import { Routes, Route } from "react-router-dom";
import SidebarHamburger from '../Sidebar/SidebarHamburger'
import ColourPicker from '../ColourPicker/ColourPicker'
import Ecommerce from '../Ecommerce/Ecommerce'
import Customers from '../Customers/Customers'
import Employees from '../Employees/Employees'
import Calender from '../Calender/Calender'
import Music from '../MusicPlayer/MusicPlayer'
import KanBan from '../KanBan/KanBan'
import Editor from '../Editor/Editor'
import './Body.css'

const Body = () => {

  return (
    <div className='body_container'>
      <div className='body_header'>
        <SidebarHamburger />
      </div>
      <div className='body_body'>
        <Routes>
          <Route path="ecommerce" element={<Ecommerce />} />
          <Route path="Music" element={<Music />} />
          <Route path="Employees" element={<Employees />} />
          <Route path="Customers" element={<Customers />} />
          <Route path="Calender" element={<Calender />} />
          <Route path="KanBan" element={<KanBan />} />
          <Route path="Editor" element={<Editor />} />
          <Route path="ColourPicker" element={<ColourPicker />} />
        </Routes>
      </div>
    </div>
  )
}

export default Body
