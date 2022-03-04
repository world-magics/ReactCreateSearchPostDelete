import React from 'react'
import MyButton from './UI/button/MyButton'

const TableItem = (props) => {
    console.log(props.title)
  return (
 
    <tr>
     
      <td>{props.number}</td>
      <td>{props.post.title}</td>
      <td>{props.post.surname}</td>
      <td>
        {/* <button className='btn btn-outline-danger'>delete</button> */}
        <MyButton onClick={()=>props.remove(props.post)}>Delete</MyButton>
      </td>
    </tr>
  
    
  )
}

export default TableItem