import React from 'react'
import { TransitionGroup,CSSTransition} from 'react-transition-group'
import TableHeader from './TableHeader'
import TableItem from './TableItem'

const TableList = ({posts,remove}) => {
  if(!posts.length){
    return (
      <h5 className='text-center my-5'>
        Not Found
      </h5>

    )
  }
  return (
    <>
      <h2 className='text-center'>What`s Your Favourite Language</h2>

      <TransitionGroup>
        {posts.map((post,index)=>(
          <CSSTransition 
          
          key={post.id}
          classNames="item"
          timeout={500}
          >
            <TableItem remove={remove} number={index+1} post={post}/>

          </CSSTransition>
        ))}
      </TransitionGroup>
{/* 
       <table className='table table-striped'>
          <thead>
            <TableHeader/>
          </thead>

            <tbody>
              
              {posts.map((post,index)=>(
               
                
                
                  <TableItem remove={remove} post={post}   number={index+1}   key={post.id}/>
                
              ))}
              
            </tbody>
       </table> */}
    </>
  )
}

export default TableList