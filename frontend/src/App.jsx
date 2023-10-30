import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/home';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  return (
    <Router>
    <div className="flex ">
      <nav  className=" bg-[#20232f] h-screen w-60" >
        <div className='text-[#06ebfc] pb-15 text-2xl text-center pt-10'>
          <h2>Admin</h2>
          <h3 className='underline'>Gestion Academica</h3>
        </div>
      
        <ul className='pl-5 pt-40'>
          <li className='pb-5'>
            
            <Link to="/" className='text-white pb-15 text-2xl'><span className='m-3 mr-16 hover:text-[#06ebfc]'>Inico</span>
            <i className="fa-solid fa-chalkboard-user"/></Link>
            
          </li>
          <li className='pb-5'>
            <Link to="/About/1" className='text-white text-2xl'><span className='m-3 hover:text-[#06ebfc]'>Lista de Alumnos</span>
            <i class="fa-solid fa-graduation-cap"/></Link> 
          </li>
          <li className='pb-5'>
            <Link to="/Contact/2" className='text-white text-2xl'><span className='m-3 hover:text-[#06ebfc]'>Registro  Alumno</span>
            <i className="fa-solid fa-chalkboard"/></Link>
          </li>
        </ul>
      </nav>
      
      <div className="flex-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About/:id" element={<About />} />
          <Route path="/Contact/:id" element={<Contact />} />
        </Routes>
      </div>
    </div>
  </Router>
  )
}

export default App
