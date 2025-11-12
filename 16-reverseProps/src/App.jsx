import React from 'react'
import { useState } from 'react'
import NavBar from './Components/NavBar'

const App = () => {
  const [Theme, setTheme] = useState('Light')
  return (
    <div>
      <h1>the theme is {Theme}</h1>
      <NavBar theme={Theme} settheme={setTheme}/>
    </div>
  )
}

export default App
