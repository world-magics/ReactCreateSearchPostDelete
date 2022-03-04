import React from 'react'

const MySelect = ({options,defaultValue}) => {
  return (
      <select className='form-select w-100'>
                <option disabled value="">{defaultValue}</option>
                {options.map(opt=>(
                    <option key={opt.value} value={opt.value}>
                        {opt.name}    
                    </option>
                ))}
            {/* <option value="val">Sorted by Surname</option> */}
            </select>
 
  )
}

export default MySelect