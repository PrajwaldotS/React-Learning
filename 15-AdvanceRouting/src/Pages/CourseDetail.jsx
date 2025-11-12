import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
    const id = useParams()
    console.log(id)
  return (
    <div>
     <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl'>Courses Details Page</h1>
    </div>
  )
}

export default CourseDetail
