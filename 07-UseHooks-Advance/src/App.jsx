import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState({user: 'Aman', age: 22})

    const btnClicked =()=>{
      const newNum = {...num}
      newNum.user = 'Ankit '
      newNum.age = 23
      setnum(newNum)
    }
    return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click Me</button>
    </div>
  )
}

export default App
