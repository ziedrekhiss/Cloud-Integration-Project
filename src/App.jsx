import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Partners from './components/Partners'
import About from './components/About'
import Projects from './components/Projects'
import dotenv from 'dotenv'
dotenv.config()
function App() {
  
  return (
    <>
      
      <BrowserRouter>
        <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/partners" element={<Partners/>}/>
        <Route path="/projects" element={<Projects/>}/>
       </Routes> 
      
      </BrowserRouter>
      
        
    </>
  )
}

export default App
