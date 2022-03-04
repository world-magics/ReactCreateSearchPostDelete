import React from 'react'

//function Compenent
// export default function Counter(){
//     const [count,setCount]=useState(0);
  
//     function inc(){
//         setCount(prev=>prev+1);
//       }
//       function dec(){
//         setCount(prev=>prev-1);
//       }
//         return (
//             <>
//                      <h3>Counter: {count}</h3>
//           <button className='btn btn-success mx-3 px-5' onClick={inc}>Increment</button>
//           <button className='btn btn-danger mx-3 px-5' onClick={dec}>Decrement</button>
     
//             </>
//         )
// }
//function Compenent End
//Class Compenent

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0

    }
    this.increment=this.increment.bind(this)
    this.decrement=this.decrement.bind(this)
  }
  increment(){
    this.setState({count:this.state.count+1})
  }
  decrement(){
    this.setState({count:this.state.count-1})
  }
  render() {
    return (
       <>
          <h4>Count: {this.state.count}</h4>
          <button className='btn btn-success mx-3 px-5' onClick={this.increment}>Increment</button>
          <button className='btn btn-success mx-3 px-5' onClick={this.decrement}>Decrement</button>
       </>
    );
  }
}


export default Counter