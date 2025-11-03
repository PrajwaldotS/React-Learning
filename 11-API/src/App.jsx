import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setdata] = useState([])
  const getData =  async ()=> {
    const response = await axios.get('https://picsum.photos/v2/list')
    setdata(response.data)
      console.log(response.data)
  }
  return (
    <div>
      <button onClick={getData}>Click me </button>
      {data.map(function(elem,idx){
        return  <h3 key = {idx}>hello {idx} </h3>
      })}
    </div>
  )
}

export default App
