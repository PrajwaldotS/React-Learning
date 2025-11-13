import { useContext } from "react"
import { themeDataContext } from "../Context/themeContext"


const Nav2 = () => {
  const data =  useContext(themeDataContext)
  console.log(data)
  return (
    <div className='nav2'>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contect</h4>
      <h4>Services</h4>
      <h4></h4>
    </div>
  )
}

export default Nav2
