import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title,setTitle] = useState('') // initailly title is empty string
  const submitHandler = (e) =>{
    e.preventDefault()  // to prevent the default behaviour of form submission stops to reload ewhen submit button is clicked
    console.log('form submitted by ', title)
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter Your Name' value={title} 
         onChange={(e)=>{
         setTitle(e.target.value) // input value is stored in title state
         
        }}/>
        <input type="text" />
        <button>Submit </button>
      </form>
    </div>
  )
}
// in this code two way binding is performed in which input is value first stored in state and then state value is shown in input field
export default App
