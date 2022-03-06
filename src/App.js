import React,{useState,useRef,useMemo} from 'react'
import './../src/bootstrap.min.css'
import '../src/style/styles.css'
import TableItem from './component/TableItem'
import TableHeader from './component/TableHeader'
import TableList from './component/TableList'
import MyButton from './component/UI/button/MyButton'
import MyInput from './component/UI/input/MyInput'
import { PostForm } from './component/PostForm'
import MySelect from './component/UI/select/MySelect'
import FilterAndSearch from './component/FilterAndSearch'
import MyModal from './component/UI/modal/MyModal'
import { usePosts } from './hooks/useCreatePost'
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
  // const [select,setSelect]=useState("")
  // const [search,setSearch]=useState("")

  const [filter,setFilter]=useState({sort:"",query:""})
  const [modal,setModal]=useState(false)
  const sortedAndSearchPosts=usePosts(posts,filter.sort,filter.query)
  // const  SortedPosts=useMemo(()=>{
  //   console.log("first")
  //   if(filter.sort){
  //     return [...posts].sort((a,b)=> a[filter.sort].localeCompare(b[filter.sort]))
  //   }
  //   return posts
  // },[filter.sort,posts])

  // const sortedAndSearch=useMemo(()=>{
  //       return SortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query.toLowerCase()))
  // },[filter.query,SortedPosts])

  // const sortedPosts=getSortedPosts()

  


  const createPost=(newPost)=>{
    setPosts([...posts,newPost])
    setModal(false)
  }
  const removePost=(post)=>{
      setPosts(posts.filter(s=>s.id !==post.id))
  }
  //  const [title,setTitle]=useState('')
  //  const [surname,setSurname]=useState('')
  //  const inputRef=useRef()

  // const sortPost=(sort)=>{
  //   setSelect(sort)
  //   // setPosts()
  //   //   console.log(sort)
  // }
  
    return (
      <div className='app w-50 mx-auto'>
        <MyButton 
        onClick={()=>setModal(true)}
        
        >
          Add Posts
        </MyButton>
        <MyModal modal={modal} setModal={setModal}>
        <PostForm  createPost={createPost}/>  
        </MyModal>

        <FilterAndSearch filter={filter} setFilter={setFilter}/>
        
      
        <TableList remove={removePost} posts={sortedAndSearchPosts}/>
      
      </div>
    )
}

export default App