import React,{useState} from 'react'

function ToogleBtn() {
    const [toogleBtn,setToogleBtn]=useState(false);

  return (
    <>
     <button className='btn btn-success px-5 my-5 mx-3' onClick={()=>setToogleBtn(!toogleBtn)}>ToogleBtn</button>
          {toogleBtn?(<p className='lead'>Youtube Content</p>):null}   
    </>
  )
}

export default ToogleBtn