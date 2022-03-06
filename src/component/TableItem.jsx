import React from 'react'
import MyButton from './UI/button/MyButton'

const TableItem = (props) => {

  return (
    <div className='d-flex justify-content-between border p-2 my-2'>
    <p>{props.number}</p>
      <p>{props.post.title}</p>
      <p>{props.post.surname}</p>
      <p>
        {/* <button className='btn btn-outline-danger'>delete</button> */}
        <MyButton onClick={()=>props.remove(props.post)}>Delete</MyButton>
      </p>
    </div>
  
    
  )
}

export default TableItem