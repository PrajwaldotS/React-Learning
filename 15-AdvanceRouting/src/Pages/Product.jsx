import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex justify-between text-white font-3xl gap-10'>
            <Link to={'/product/Women'}>Women</Link>
            <Link to={'/product/men'}>Men</Link>
        </div>
      {/* <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl'>Product Page</h1> */}
    </div>
  )
}

export default Product
