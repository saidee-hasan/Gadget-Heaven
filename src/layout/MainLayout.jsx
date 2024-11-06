import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className=' '>
      <Navbar/>
   <br />
   <br />
   
      <div className="min-h-[calc(100vh-152px)] "><Outlet/></div>
       <Footer/>
    </div>
  )
}
