import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { handleLogin, saveUser } from '../../../redux/reducers/authSlice/authSlice'
import {Link, useNavigate} from 'react-router-dom'
import './index.scss'
import Input from '../../../components/common/input/Input'
import { Post } from '../../../api/apiCall'
import { endpoint } from '../../../api/apiUrl'
import { toast } from 'react-toastify'
const Login = () => {
  const [formData,setFormData] = useState({
    email:"",
    password:""
  })
  const navigate= useNavigate()
  const dispatch = useDispatch()
  const onSubmit = async (e) =>{
    e.preventDefault()
    try{
      const response = await Post(endpoint.auth.LOGIN_USER,formData)
      handleLogin(response.data.token)
      dispatch(saveUser(response.data.user))
      if(response.data.auth){
        navigate('/')
        toast.success(response.data.message)
      }
    }catch(e){
      toast.error(e.response.data.message)
    }
   
  }
  return (
    <div className='login-page'>
        <div className='login-form'>
          <form>
            <Input label={"Email"} setValue={setFormData} value={formData.email} field={'email'}/>
            <Input label={"Password"}  setValue={setFormData} value={formData.password} field={'password'}/>
            <p className='signup-info'>Don't have an account? <Link to={'/auth/signup'}>Sign up</Link></p>
            <button onClick={onSubmit}>Login</button>
          </form>
        </div>
    </div>
  )
}

export default Login