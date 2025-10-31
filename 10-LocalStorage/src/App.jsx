import React from 'react'

const App = () => {
  localStorage.setItem('User','prajwal')  // this storages the data locally even if i close the computer this data will be stored 
   localStorage.setItem('age',18) 
   localStorage.removeItem('age') //removes the item from local storage
   sessionStorage.setItem('random','Storage') // this is delted as soon as the browser is closed acts like temporary s
  const  User = localStorage.getItem('User')
  const Age = localStorage.getItem('age')   
  const user2 ={
    username:"ramesh",
    age:19,
    city:"sedam"
  }     
  // localStorage.clear() is used to clear the local storage
 const user =  localStorage.setItem('user',JSON.stringify(User))  //json.stringify is used to convert the object into string cause object is not readable inform of pair   
 const getUser = localStorage.getItem(JSON.parse(user)) // JSON.parse is used too convert the stringed Object into normal Object
  return (
    <div>
      <h1>Name Of User Is {User} age of user is {Age}</h1>
      
    </div>
  )
}

export default App
