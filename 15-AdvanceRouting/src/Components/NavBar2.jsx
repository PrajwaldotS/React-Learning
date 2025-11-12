import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar2 = () => {
    const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>{
          navigate('/')
          console.log("home")
      }} className='bg-emerald-200 px-4 py-2 m-2 active:scale-95'>Return home Page</button>
      <button onClick={()=>{
        navigate(-1)
        console.log("Back")
      }} className='bg-emerald-200 px-4 py-2 m-2 active:scale-95'>Back</button>
    </div>
  )
}

export default NavBar2
