import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [UserData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const getData = async () =>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
    console.log(UserData);
  }
  useEffect(()=>{
    getData()
  },[index])
   let printUserData = <h3 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading......</h3>
    if(UserData.length > 0){
      printUserData = UserData.map(function(elem,idx){
        return <a href={elem.url} target='_blank' key={idx}>
          <div  className='h-40 w-44 bg-white overflow-hidden   rounded-xl '>
          <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          
        </div>
        {elem.author}</a>
      })
    }
  return (
    <div className="bg-black h-screen p-4 overflow-auto text-white">
      
      <div className='flex flex-wrap gap-4  overflow-hidden p-3'>{printUserData}</div>
      <div className='flex justify-center align-center gap-5'>
        <button  onClick={()=>{
          if(index> 1){
            setIndex(index-1)
            setUserData([]) // to show loading effect while data is being fetched
          }

        }} className='bg-amber-400 text-black cursor-pointer py-2 px-5 rounded active:scale-95'>Prev</button>
        <h3 className='mt-2'>Page {index}</h3>
        <button  onClick={()=>{
          setUserData([]) // to show loading effect while data is being fetched
          setIndex(index+1)
        }}  className='bg-amber-400 text-black cursor-pointer py-2 px-5 rounded active:scale-95'>Next</button>
      </div>
    </div>
  )
}

export default App ;
