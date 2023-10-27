import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/home';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  return (
    <Router>
    <div className="d-flex">
      <nav  className="flex-1 bg-blue-700 h-screen" >
        <div className='text-white pb-15 text-2xl text-center pt-10'>
          <h2>Admin</h2>
          <p>[name Admin]</p>
        </div>
      
        <ul className='pl-5 pt-40'>
          <li className='pb-5'>
            <Link to="/" className='text-white pb-15 text-2xl'><span className='m-3 mr-16'>Inico</span>
            <i class="fa-solid fa-chalkboard-user"/></Link>
            
          </li>
          <li className='pb-5'>
            <Link to="/About/1" className='text-white text-2xl'><span className='m-3'>Lista de Alumnos</span>
            <i class="fa-solid fa-graduation-cap"/></Link> 
          </li>
          <li className='pb-5'>
            <Link to="/Contact/2" className='text-white text-2xl'><span className='m-3'>Registro  Alumno</span>
            <i class="fa-solid fa-chalkboard"/></Link>
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
