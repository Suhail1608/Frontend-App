import React from 'react'
import {useSelector} from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
const AuthLayout = () => {
    const user = useSelector((state)=>(state.auth.data))
    console.log(user)
 if(user!==null){
    return <Outlet/>
 }else{
    return <Navigate to={'/auth/login'}/>
 }
}
export default AuthLayout