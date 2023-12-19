import React from 'react'
import { useState } from 'react'

function Counter() {

const[count,setCount] =useState(0)

 const decrement =()=>{
     return (count>0)?setCount(count-1):count==0
    //  return setCount(count-1)
 }

  return (
    <>
    <h1>counter</h1>
    <br />
    <h1>{count}</h1>
    <br />
    <button onClick={()=>setCount(count+1)}>Increment</button>    
    <button onClick={decrement}>Decrement</button>    
    </>
  )
}

export default Counter