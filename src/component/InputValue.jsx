import React,{useState} from 'react'

function InputValue() {
    const [value,setValue]=useState("sa");
  return (
    <>
         <p>Value:{value}</p>
          <input 
          type="text"
          value={value} 
          className='form-control'
          onChange={event=>setValue(event.target.value)}
          />
    </>
  )
}

export default InputValue