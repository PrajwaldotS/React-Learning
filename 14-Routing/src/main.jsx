
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// BrowserRouter is used to wrap the entire application to enable routing functionality helps to perform Single Page application
createRoot(document.getElementById('root')).render( 
  <BrowserRouter>  
  <App/>
  </BrowserRouter>
  )
