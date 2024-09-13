import React from 'react'
import './index.scss'
const Input = ({label,value,setValue}) => {
  return (
    <div className='input-holder'>
    <p className='label'>{label}</p>
    <input
        className='common-input'
        value={value}
        onChange={setValue}
    />
    </div>
  )
}

export default Input