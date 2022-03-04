import React from 'react'
import TableHeader from './TableHeader'
import TableItem from './TableItem'

const TableList = ({posts,remove}) => {
  return (
    <>
      <h2 className='text-center'>What`s Your Favourite Language</h2>
       <table className='table table-striped'>
          <thead>
            <TableHeader/>
          </thead>

            <tbody>
              {posts.map((post,index)=>(
                <TableItem remove={remove} post={post} key={post.id} number={index+1}/>
              ))}
            
            </tbody>
       </table>
    </>
  )
}

export default TableList