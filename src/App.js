import React,{useState,useRef} from 'react'
import './../src/bootstrap.min.css'
import '../src/style/styles.css'
import TableItem from './component/TableItem'
import TableHeader from './component/TableHeader'
import TableList from './component/TableList'
import MyButton from './component/UI/button/MyButton'
import MyInput from './component/UI/input/MyInput'
import { PostForm } from './component/PostForm'
// import Counter from './component/Counter';
// import InputValue from './component/InputValue';
// import ToogleBtn from './component/ToogleBtn';
const App=()=>{
   
  const [posts,setPosts]=useState([
    {id:1,title:'JavaScript',surname:'Akmal'},
    {id:2,title:'Pyhton',surname:'Bahodir'},
    {id:3,title:'Java',surname:'Laylo'},
    {id:4,title:'Script',surname:'Qodir'},
  ])

  const createPost=(newPost)=>{
    setPosts([...posts,newPost])
  }
  const removePost=(post)=>{
      setPosts(posts.filter(s=>s.id !==post.id))
  }
  //  const [title,setTitle]=useState('')
  //  const [surname,setSurname]=useState('')
  //  const inputRef=useRef()

  
    return (
      <div className='app w-50 mx-auto'>

        <PostForm createPost={createPost}/>  
        <div className='d-flex flex-row-reverse my-2'>
          <select className='form-select w-100'>
            <option value="val">Sorted by Title</option>
            <option value="val">Sorted by Surname</option>
          </select>
        </div>
        
        {posts.length
        ?
        <TableList remove={removePost} posts={posts}/>
        :
        <h5 className='text-center my-5'>You Should Some Post</h5>
        }
      </div>
    )
}

export default App