import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import themeContext from './Context/themeContext.jsx'

createRoot(document.getElementById('root')).render(
 <themeContext>
    <App/>
 </themeContext>
)
