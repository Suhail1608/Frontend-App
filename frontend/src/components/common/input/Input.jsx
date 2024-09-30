import React from 'react'
import './index.scss'
const Input = ({label,value,setValue,field}) => {
  const handleOnChange = (e,field) =>{
    if(field){
      setValue((prev)=>({
        ...prev,
        [field]:e.target.value
      }))
    }else{
      setValue(e.target.value)
    }
  }
  return (
    <div className='input-holder'>
    <p className='label'>{label}</p>
    <input
        className='common-input'
        value={value}
        onChange={(e)=>{handleOnChange(e,field)}}
    />
    </div>
  )
}

export default Input