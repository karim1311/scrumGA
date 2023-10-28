import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/home';
import About from './components/About';
import Contact from './components/Contact';
import Notes from './components/Notes';
import RegistroCali from './components/RegistroCali'

function App() {

  return (
    <Router>
    <div className="d-flex">
      <nav  className="flex-1 bg-blue-900 h-screen drop-shadow-2xl rounded-lg" >
        <div className='text-white pb-15 text-2xl text-center pt-10'>
          <h2>Admin</h2>
          <p>[name Admin]</p>
        </div>
      
        <ul className='pl-5 pt-40'>
          <li className='pb-5 bg-'>
            <Link to="/" className='text-white pb-15 text-2xl'><span className='m-3 mr-16  hover:text-blue-400'>Inicio</span>
            <i class="fa-solid fa-chalkboard-user"/></Link>
            
          </li>
          <li className='pb-5'>
            <Link to="/About/1" className='text-white text-2xl'><span className='m-3  hover:text-blue-400'>Lista de Alumnos</span>
            <i class="fa-solid fa-graduation-cap"/></Link> 
          </li>
          <li className='pb-5'>
            <Link to="/Contact/2" className='text-white text-2xl'><span className='m-3  hover:text-blue-400'>Registro  Alumno</span>
            <i class="fa-solid fa-user-pen"></i></Link>
          </li>
          <li className='pb-5'>
            <Link to="/Notes/3" className='text-white text-2xl'><span className='m-3  hover:text-blue-400'>Calificaciones</span>
            <i class="fa-solid fa-chalkboard"/></Link>
          </li>
          <li className='pb-5'>
            <Link to="/RegistroCali/4" className='text-white text-2xl'><span className='m-3  hover:text-blue-400'>Registro Calificación</span>
            <i class="fa-solid fa-pen-to-square"></i></Link>
          </li>
        </ul>
      </nav>
      
      <div className="flex-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About/:id" element={<About />} />
          <Route path="/Contact/:id" element={<Contact />} />
          <Route path="/Notes/:id" element={<Notes />} />
          <Route path="/RegistroCali/:id" element={<RegistroCali />} />
        </Routes>
      </div>
    </div>
  </Router>
  )
}

export default App
