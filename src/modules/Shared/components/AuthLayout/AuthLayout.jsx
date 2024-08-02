import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className='contanerauth'>
      <div className='auth'></div>
      <Outlet/>

      
    </div>
  )
}
