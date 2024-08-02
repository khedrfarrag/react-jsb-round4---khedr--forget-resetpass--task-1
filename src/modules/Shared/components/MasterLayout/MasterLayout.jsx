import React from 'react'
import SideBar from "../SideBar/SideBar"
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
export default function MasterLayout() {
  return (
    <>
      <div className='contaner-fuild'>
        <div className='row'>
          <div className='col-md-3'></div>
          <NavBar/>
        </div>
        <div className="col-md-9">
            <SideBar/>
          <Outlet/>
        </div>

      </div>
            <h1>Hello World From MasterLayout </h1>
      
    </>
  )
}
