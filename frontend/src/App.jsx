import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import CreateEmployee from './components/employee/CreateEmployee';
import EditEmployee from './components/employee/EditEmployee';
import ShowEmployees from './components/employee/ShowEmployees';

import CreateAlumno from './components/alumno/CreateAlumno';
import EditAlumno from './components/alumno/EditAlumno';
import ShowAlumnos from './components/alumno/ShowAlumnos';

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
            <i className="fa-solid fa-chalkboard"/></Link>
          </li>
          <hr />
          <li className='pb-5'>
            <Link to="/employees" className='text-white text-2xl'><span className='m-3'>Empleados</span>
            <i className="fa-solid fa-chalkboard"/></Link>
          </li>
          <li className='pb-5'>
            <Link to="/employeecreate" className='text-white text-2xl'><span className='m-3'>Crear empleado</span>
            <i className="fa-solid fa-chalkboard"/></Link>
          </li>

          <hr />
          <li className='pb-5'>
            <Link to="/alumnos" className='text-white text-2xl'><span className='m-3'>Alumnos</span>
            <i className="fa-solid fa-chalkboard"/></Link>
          </li>
          <li className='pb-5'>
            <Link to="/alumnocreate" className='text-white text-2xl'><span className='m-3'>Crear Alumno</span>
            <i className="fa-solid fa-chalkboard"/></Link>
          </li>
          

        </ul>
      </nav>
      
      <div className="flex-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About/:id" element={<About />} />
          <Route path="/Contact/:id" element={<Contact />} />

          <Route path='/employees' element={ <ShowEmployees/>} />
          <Route path='/employeecreate' element={ <CreateEmployee/>} />
          <Route path='/employeeedit/:id' element={ <EditEmployee/>} />

          <Route path='/alumnos' element={ <ShowAlumnos/>} />
          <Route path='/alumnocreate' element={ <CreateAlumno/>} />
          <Route path='/alumnoedit/:id' element={ <EditAlumno/>} />

        </Routes>
      </div>
    </div>
  </Router>
  )
}

export default App


