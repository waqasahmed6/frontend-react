import { useState } from 'react'
import './form.css'
function Form(){
 
// const [count, setCount] = useState(0);
// const handleClick =(dx)=>{
//   setCount(count + dx)
// }


// const[firstname,setfirstname]=useState("")
// const[lastname,setlastname]=useState("")
// const[email,setemail]=useState("")


const handlestate={
  firstname:"",
  lastname:"",
  email:""
}
const[input,setinput]=useState(handlestate)
const handleSubmit =(e)=>{
e.preventDefault()
console.log("form is submitted")
}

  return (
    <>
    
    <form className='form' action="">
      
    <h1 className='heading'>login</h1>
    
      <br />
      <input type="text"  className= 'a input' required name="firstname" value={input.firstname} onChange={(e) => setinput({...input , firstname:e.target.value})} placeholder='Enter First name' id="" />
      <br />
      <br />
      <input type="text" name="lastname"  required className=' input' value={input.lastname} onChange={(e) => setinput({...input , lastname:e.target.value})} placeholder='Enter Second Name' id="" />
      <br />
      <br />
      <input type="email" required name="email" value={input.email} className='input' onChange={(e)=>setinput({...input , email:e.target.value})}   placeholder='Enter Email' id="" />
      <br />
      <br />
    <button  className=' input btn '  onClick={handleSubmit}>login</button>
    </form>
  
  {/* { <div className='counter'>
<h1 >counter: {count}</h1>
<button onClick={(dx) => handleClick(dx = 1)}>Increment</button>
<br /> <br />
<button onClick={(dx) => handleClick(dx = -1)}>Decrement</button>
</div> } */}
    </>
  )
  }

export default Form
