import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
  const [Title, setTitle] = useState('')
  const [Detail, setDetail] = useState('')
  const [Task, setTask] = useState([])
 const submitHandler = (e) => {
    e.preventDefault()
    setTitle('')
    setDetail('')
    
    const copyTask = [...Task];  // Create a copy of the current Task array
    copyTask.push({Title,Detail});  // Add the new task to the copy
    setTask(copyTask);
    console.log(copyTask)
  } 
  const deleteNote =(idx)=>{
      const copyTask = [...Task]
      copyTask.splice(idx,1)
      setTask(copyTask)
  }
  
  return (
    
   <div>
     <div className='h-screen bg-gray-400 lg:flex lg:overflow-y-hidden  text-black'>
      <form  onSubmit={(e)=>{
          submitHandler(e) }} className='flex justify-center flex-col lg:w-1/2 items-center   bg-gray-600 p-10 '>
            {/* first input */}
            <h1 className='text-7xl font-bold'>Add Notes</h1>
        <input type="text" className='px-5 py-2 m-10 w-full border-2 rounded'  placeholder='Enter Task Heading'
        value={Title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }} />
        {/* detailed input */}
        <input type="text" className='px-5 py-2 h-28 w-full border-2 rounded' placeholder='Enter Details' 
        value={Detail}
        onChange={(e)=>{
          setDetail(e.target.value)
        }}/>
        <button 
    
        
         className='bg-white px-5 py-2 border-2 w-full m-5 text-black active:bg-gray-300 '>
          button
         </button>
      </form>
      <div className=' lg:w-1/2 bg-gray-900 p-10'>
      <h1 className='text-7xl text-center text-white font-bold m-2'>Your Notes</h1>
      <div className='flex gap-5 flex-wrap  h-full overflow-auto mb-10'>
        {Task.map((elem,idx)=>{
          return <div key={idx} className='bg-cover bg-[url("https://marketplace.canva.com/EAFy0Dt_K-k/1/0/1131w/canva-beige-and-white-paper-notes-document-gOyPWxb9UyI.jpg")] text-black p-5 rounded w-60 h-60'>
            <X onClick={ ()=>{
              deleteNote(idx)
            }} className='mt-2'/>
            <h1 className='text-2xl font-bold mx-2 my-4'>{elem.Title}</h1>
            <p className='mx-2'>{elem.Detail}</p>
          </div>
        })}
       
      </div>
      </div>
    </div>
   </div>
  )
}

export default App
