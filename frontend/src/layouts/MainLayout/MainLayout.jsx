import React from 'react'
import './index.scss'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
const MainLayout = ({children}) => {
  return (
    <div className='main-layout'>
        <Header/>
        <div className='layout-content'><Outlet/></div>
    </div>
  )
}

export default MainLayout