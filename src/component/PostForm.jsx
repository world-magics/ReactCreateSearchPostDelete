import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

export const PostForm = ({createPost}) => {
    const [post,setPost]=useState({title:'',surname:''})
    const addPost=(e)=>{
        e.preventDefault(); 
        const newPost={
            ...post,
            id:Date.now(),
        }

        createPost(newPost)
       //  const newPost={
       //   id:Date.now(),
       //   title,
       //    surname
       //  }
       //  setPosts([...posts,newPost])
    //    setPosts([...posts,{...post,id:Date.now()}])
       setPost({title:'',surname:''})
       //  setTitle('')
       //  setSurname('')
       //  console.log(inputRef.current.value)
      }
  return (
 
          <form>
        <h4 className='text-center'>Create your first post</h4>
          <MyInput
            type='text' 
            className='form-control my-3' 
            placeholder='Programming Language'
            value={post.title}
            // onChange={e=>setTitle(e.target.value)}
            onChange={e=>setPost({...post,title:e.target.value})}
          />
          <MyInput
            type='text' 
            className='form-control my-3' 
            placeholder='Programming Language'
            // value={title}
            // ref={inputRef}
            value={post.surname}
            // onChange={e=>setSurname(e.target.value)}
            onChange={e=>setPost({...post,surname:e.target.value})}

          />  
          {/* <input type="text" ref={inputRef}/> */}
      
      <MyButton onClick={addPost}>
        Add Post
      </MyButton>
      </form>

  )
}
