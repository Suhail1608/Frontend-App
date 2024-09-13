import React from 'react'
import {useDispatch} from 'react-redux'
import { handleLogin, saveUser } from '../../../redux/reducers/authSlice'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch()
  const onSubmit = async () =>{
    handleLogin()
    navigate('/')
    const user = {
      name:'Suhail',
      mail:'suhail@doodleblue.in'
    }
    dispatch(saveUser(user))
    localStorage.setItem('user',JSON.stringify(user))
  }
  return (
    <div>
        Login
        <button onClick={onSubmit}>Login</button>
    </div>
  )
}

export default Login