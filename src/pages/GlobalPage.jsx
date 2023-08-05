import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const GlobalPage = () => {
  return (
    <>
    <div className='bg-[#0F1014] h-screen'>
        <Navbar/>
        <Outlet/>
    </div>
    </>
  )
}

export default GlobalPage