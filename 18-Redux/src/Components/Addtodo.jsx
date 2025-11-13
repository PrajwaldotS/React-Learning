import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo } from '../Features/TodoSlice'

const AddTodo = () => {
  const [input, setinput] = useState('')
  const dispatch = useDispatch()
  const addtodoHandler = (e)=>{
      e.preventDefault()
      dispatch(addTodo(input))
      setinput('')
  }
  return (
    <form action="" className='bg-black h-screen ' onSubmit={addtodoHandler}>
      <input type="text" className='bg-white' value={input}  onChange={(e)=>{
        setinput(e.target.value)
      }}/>
      <button type='submit'
      className='border-1 text-white mx-10 px-10 '>
          click me 
      </button>
    </form>
  )
}

export default AddTodo
