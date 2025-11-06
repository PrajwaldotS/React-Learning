import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Notfound from './Pages/Notfound.jsx'
import Product from './Pages/Product.jsx'
import Men from './Pages/Men.jsx'
import MenShirt from './Pages/MenShirt.jsx'
import Women from './Pages/Women.jsx'
const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='product' element={<Product/>}>
             <Route path='men' element={<Men/>}/>
             <Route path='women' element={<Women/>}/>
        </Route>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
