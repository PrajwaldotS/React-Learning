import React from 'react'
import Todos from './Components/Todos'
import  AddTodo  from './Components/Addtodo'

const App = () => {
  return (
    <div>
      <h1>todolist</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
