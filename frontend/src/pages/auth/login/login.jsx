import React from 'react'
import {useDispatch} from 'react-redux'
import { handleLogin, saveUser } from '../../../redux/reducers/authSlice/authSlice'
import {useNavigate} from 'react-router-dom'
import './index.scss'
import Input from '../../../components/common/input/Input'
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
    <div className='login-page'>
        <div className='login-form'>
         
          <form>
            <Input label={"Username"}/>
            <Input label={"Password"}/>
            <button onClick={onSubmit}>Login</button>
          </form>
        </div>
    </div>
  )
}

export default Login