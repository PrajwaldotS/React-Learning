import { createContext, useState } from "react"

export const themeDataContext = createContext()
const themeContext = (props) => {
  const [theme, settheme] = useState('light')
  return (
    <div>
      <themeDataContext.Provider value={[theme,settheme]}>
        {props.children}
      </themeDataContext.Provider>
    </div>
  )
}

export default themeContext
