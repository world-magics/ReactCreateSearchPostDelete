import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const FilterAndSearch = ({filter,setFilter}) => {
  return (
    <div className='d-flex justify-content-between my-2'>
    <MyInput
    className="form-control mx-1"
    placeholder="Search..."
    value={filter.query}
    onChange={e=>setFilter({...filter,query:e.target.value})}

    />
    
    <MySelect 
      value={filter.sort}
      onChange={selected=>setFilter({...filter,sort:selected})}
      defaultValue="Sorted by"
      options={[
        {value:"title",name:"Programming"},
        {value:"surname",name:"Surname"}
      ]}

      
    />
  </div>
  )
}

export default FilterAndSearch