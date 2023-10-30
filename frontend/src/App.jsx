import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Notes from './components/Notes';
import RegistroCali from './components/RegistroCali'

import CreateEmployee from './components/employee/CreateEmployee';
import EditEmployee from './components/employee/EditEmployee';
import ShowEmployees from './components/employee/ShowEmployees';

import CreateAlumno from './components/alumno/CreateAlumno';
import EditAlumno from './components/alumno/EditAlumno';
import ShowAlumnos from './components/alumno/ShowAlumnos';

import CreateEvaluaciones from './components/evaluaciones/CreateEvaluacion';
import EditEvaluaciones from './components/evaluaciones/EditEvaluacion';
import ShowEvaluaciones from './components/evaluaciones/ShowEvaluaciones';

import CreateCalificaciones from './components/calificaciones/CreateCalificaciones';
import EditCalificaciones from './components/calificaciones/EditCalificaciones';
import ShowCalificaciones from './components/calificaciones/ShowCalificaciones';

import CreateTipos from './components/tipos/CreateTipos';
import EditTipos from './components/tipos/EditTipos';
import ShowTipos from './components/tipos/ShowTipos';

function App() {
  
  return (

    <Router>      
    <div className="flex">
      <nav  className="flex-1 bg-blue-900 h-screen drop-shadow-2xl rounded-lg" >
        <div className='text-white pb-15 text-2xl text-center pt-10'>
          <h2>Admin</h2>
          <p>[name Admin]</p>
        </div>
        
        <ul className='pl-5 pt-40 flex flex-col items-center'>
          <li className='pb-5 bg-'>
            <Link to="/" className='text-white pb-15 text-2xl pl-14'><span className='m-3 mr-16  hover:text-blue-400'>Inicio</span>
            <i className="fa-solid fa-chalkboard-user"/></Link>
          </li>
          <li className='pb-5'>
            <Link to="/About/1" className='text-white text-2xl'><span className='m-3  hover:text-blue-400'>Lista de Alumnos</span>
            <i className="fa-solid fa-graduation-cap"/></Link> 
          </li>
          <li className='pb-5'>

            <Link to="/Contact/2" className='text-white text-2xl'><span className='m-3  hover:text-blue-400'>Registro  Alumno</span>
            <i className="fa-solid fa-user-pen"></i></Link>
          </li>
          <li className='pb-5'>
            <Link to="/calificaciones" className='text-white text-2xl'><span className='m-3  hover:text-blue-400'>Calificaciones</span>
            <i className="fa-solid fa-chalkboard"/></Link>
          </li>
          <li className='pb-5'>
            <Link to="/RegistroCali/4" className='text-white text-2xl'><span className='m-3  hover:text-blue-400'>Registro Calificación</span>
            <i className="fa-solid fa-pen-to-square"></i></Link>
          </li>
          
          <hr />
          <li className='pb-5'>
            <Link to="/evaluaciones" className='text-white text-2xl'><span className='m-3 hover:text-blue-400'>Evaluaciones</span>
            <i className="fa-solid fa-chalkboard"/></Link>
          </li>
          <li className='pb-5'>
            <Link to="/evaluacionescreate" className='text-white text-2xl'><span className='m-3 hover:text-blue-400'>Crear Evaluación</span>
            <i className="fa-solid fa-chalkboard"/></Link>
          </li>

          <hr />
          <li className='pb-5'>
            <Link to="/tipos" className='text-white text-2xl'><span className='m-3'>Tipos</span>
            <i className="fa-solid fa-chalkboard"/></Link>
          </li>
          <li className='pb-5'>
            <Link to="/tiposcreate" className='text-white text-2xl'><span className='m-3'>Crear Tipos</span>
            <i className="fa-solid fa-chalkboard"/></Link>
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
          
          <Route path='/alumnos' element={ <ShowAlumnos/>} />
          <Route path='/alumnocreate' element={ <CreateAlumno/>} />
          <Route path='/alumnoedit/:id' element={ <EditAlumno/>} />
          
          <Route path='/calificaciones' element={ <ShowAlumnos/>} />
          <Route path='/calificacionescreate' element={ <CreateAlumno/>} />
          <Route path='/calificacionesedit/:id' element={ <EditAlumno/>} />
          
          <Route path='/evaluaciones' element={ <ShowAlumnos/>} />
          <Route path='/evaluacionescreate' element={ <CreateAlumno/>} />
          <Route path='/evaluacionesedit/:id' element={ <EditAlumno/>} />
          
          <Route path='/employees' element={ <ShowEmployees/>} />
          <Route path='/employeecreate' element={ <CreateEmployee/>} />
          <Route path='/employeeedit/:id' element={ <EditEmployee/>} />
        </Routes>
      </div>
    </div>
  </Router>
  )
}

export default App


