import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='Navbar'>
        <h1>Prajwal</h1>
        <div className='Links'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
