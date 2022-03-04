import React,{useState,useRef} from 'react'
import './../src/bootstrap.min.css'
import '../src/style/styles.css'
import TableItem from './component/TableItem'
import TableHeader from './component/TableHeader'
import TableList from './component/TableList'
import MyButton from './component/UI/button/MyButton'
import MyInput from './component/UI/input/MyInput'
import { PostForm } from './component/PostForm'
import MySelect from './component/UI/select/MySelect'
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
  const [select,setSelect]=useState("")
  const [search,setSearch]=useState("")

  


  const createPost=(newPost)=>{
    setPosts([...posts,newPost])
  }
  const removePost=(post)=>{
      setPosts(posts.filter(s=>s.id !==post.id))
  }
  //  const [title,setTitle]=useState('')
  //  const [surname,setSurname]=useState('')
  //  const inputRef=useRef()

  const sortPost=(sort)=>{
    setSelect(sort)
    setPosts([...posts].sort((a,b)=> a[sort].localeCompare(b[sort])))
      console.log(sort)
  }
  
    return (
      <div className='app w-50 mx-auto'>

        <PostForm createPost={createPost}/>  
        <div className='d-flex justify-content-between my-2'>
          <MyInput
          className="form-control mx-1"
          placeholder="Search..."
          value={search}
          onChange={e=>setSearch(e.target.value)}

          />
          <MySelect 
            value={select}
            onChange={sortPost}
            defaultValue="Sorted by"
            options={[
              {value:"title",name:"Programming"},
              {value:"surname",name:"Surname"}
            ]}
          />
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