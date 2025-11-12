import React from 'react'

const NavBar = (Props) => {
    const ChngTheme= ()=>{
        console.log(Props)
        
        Props.settheme('Dark')
         console.log(Props.theme)
    }
  return (
    <div>
      <button onClick={ChngTheme}>Chnage Theame</button>
    </div>
  )
}

export default NavBar
