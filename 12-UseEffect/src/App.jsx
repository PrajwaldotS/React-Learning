import React, { useState,useEffect } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  const [Num2, setNum2] = useState(100)
  useEffect(() => {
    console.log('UseEffect called')
  },[num]) // use effect will run only when num chnages as it is paassed as a dependency
  return (
    <div>
      <h1>{num} and {Num2}</h1>
      <button onMouseEnter={()=>{
        setnum(num+1)
      }}
      onMouseLeave={()=>{
        setNum2(Num2+1)
      }}>click me </button>
    </div>
  )
}

export default App
