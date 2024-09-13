import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { saveUser } from '../../redux/reducers/authSlice/authSlice'
import './index.scss'
const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const header = [
        {
            label:"Home",
            link:'/',
            isActive:true
        },
        {
            label:"Posts",
            link:'/posts',
            isActive:true
        },
        {
            label:"About",
            link:'/',
            isActive:true
        },
        {
            label:"Logout",
            link:'/auth/login',
            isActive:true
        },
    ]
const handleLogout = async()=>{
    dispatch(saveUser(null))
    localStorage.clear()
    navigate('/auth/login')
}
  return (
    <div className='header'>
        {header?.map((item)=>(
            <Link className='menu-item' to={item?.link} onClick={item?.label === 'Logout' && handleLogout}>
                {item?.label}
            </Link>)
        )}
    </div>
  )
}

export default Header