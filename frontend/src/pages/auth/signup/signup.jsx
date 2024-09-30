import {Link, useNavigate} from 'react-router-dom'
import './index.scss'
import { Post } from '../../../api/apiCall'
import { useState } from 'react'
import Input from '../../../components/common/input/Input'
import { endpoint } from '../../../api/apiUrl'
import { toast } from 'react-toastify'
const SignUp = () => {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
    // role:"ADMIN"
  })
  const navigate= useNavigate()
  const onSubmit = async (e) =>{
    e.preventDefault()
    try{
      const response = await Post(endpoint.auth.REGISTER_USER,formData)
      toast.success(response.data.message)
      navigate('/auth/login')
    }catch(e){
      toast.error(e.response.data.message)
    }
  }
  return (
    <div className='login-page'>
        <div className='login-form'>
         
          <form>
            <Input label={"Name"} value={formData.name} setValue={setFormData} field={"name"}/>
            <Input label={"Email"} value={formData.email} setValue={setFormData} field={"email"}/>
            <Input label={"Password"} value={formData.password} setValue={setFormData} field={"password"}/>
            <p className='signup-info'>Already have an account? <Link to={'/auth/login'}>Login in</Link></p>
            <button onClick={onSubmit}>Register</button>
          </form>
        </div>
    </div>
  )
}

export default SignUp