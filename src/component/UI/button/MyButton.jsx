import React from 'react'
import '../button/MyButton.css'

function MyButton({children,...props}) {
  return (
    <div>
        <button {...props} className='btn btn-outline-primary w-100 my-3'>
            {children}
        </button>
        
    </div>
  )
}

export default MyButton