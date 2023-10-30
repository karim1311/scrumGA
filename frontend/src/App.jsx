import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Notes from "./components/Notes";
// import RegistroCali from "./components/RegistroCali";

import CreateEmployee from "./components/employee/CreateEmployee";
import EditEmployee from "./components/employee/EditEmployee";
import ShowEmployees from "./components/employee/ShowEmployees";

import CreateAlumno from "./components/alumno/CreateAlumno";
import EditAlumno from "./components/alumno/EditAlumno";
import ShowAlumnos from "./components/alumno/ShowAlumnos";

import CreateCalificacion from "./components/calificacion/CreateCalificacion";
import EditCalificacion from "./components/calificacion/EditCalificacion";
import ShowCalificaciones from "./components/calificacion/ShowCalificaciones";

import CreateEvaluacion from "./components/evaluacion/CreateEvaluacion";
import EditEvaluacion from "./components/evaluacion/EditEvaluacion";
import ShowEvaluaciones from "./components/evaluacion/ShowEvaluaciones";

import CreateTipo from "./components/tipo/CreateTipo";
import EditTipo from "./components/tipo/EditTipo";
import ShowTipos from "./components/tipo/ShowTipos";

function App() {
  return (

    <Router>
      <div className="d-flex">
        <nav className="flex-1 bg-blue-900 h-screen drop-shadow-2xl rounded-lg" >
          <div className='text-white pb-15 text-2xl text-center pt-10'>
            <h2>Admin</h2>
            <p>[name Admin]</p>
          </div>

          <ul className='pl-5 pt-40'>
            <li className='pb-5 bg-'>
              <Link to="/" className='text-white pb-15 text-2xl'><span className='m-3 mr-16  hover:text-blue-400'>Inicio</span>
                <i className="fa-solid fa-chalkboard-user" /></Link>
            </li>
            <hr />
            <li className='pb-5'>
              <Link to="/alumnos" className='text-white text-2xl'><span className='m-3  hover:text-blue-400'>Alumnos</span>
                <i className="fa-solid fa-graduation-cap" /></Link>
            </li>
            <li className='pb-5'>
              <Link to="/alumnocreate" className='text-white text-2xl'><span className='m-3  hover:text-blue-400'>Registrar  Alumno</span>
                <i className="fa-solid fa-user-pen"></i></Link>
            </li>

            <hr />
            <li className="pb-5">
              <Link to="/tipos" className="text-white text-2xl">
              <i class="fa-solid fa-building mr-3" />
                <span className="m-3 hover:text-blue-400 ">Tipos</span>                
              </Link>
            </li>
            <li className="pb-5">
              <Link to="/tipocreate" className="text-white text-2xl">
              <i class="fa-solid fa-building-user mr-3" />
                <span className="m-3 hover:text-blue-400 ">Crear Tipo</span>                
              </Link>
            </li>
            <hr />
            <li className='pb-5'>
              <Link to="/calificaciones" className='text-white text-2xl'><span className='m-3  hover:text-blue-400'>Calificaciones</span>
                <i className="fa-solid fa-chalkboard" /></Link>
            </li>
            <li className='pb-5'>
              <Link to="/calificacioncreate" className='text-white text-2xl'><span className='m-3  hover:text-blue-400'>Registrar Calificación</span>
                <i className="fa-solid fa-pen-to-square"></i></Link>
            </li>

            <hr />
            <li className='pb-5'>
              <Link to="/evaluaciones" className='text-white text-2xl'><span className='m-3 hover:text-blue-400'>Evaluaciones</span>
                <i className="fa-solid fa-chalkboard" /></Link>
            </li>
            <li className='pb-5'>
              <Link to="/evaluacioncreate" className='text-white text-2xl'><span className='m-3 hover:text-blue-400'>Crear Evaluacion</span>
                <i className="fa-solid fa-chalkboard" /></Link>
            </li>

            <hr/>            
            <li className='pb-5'>
              <Link to="/employees" className='text-white text-2xl'><span className='m-3 hover:text-blue-400'>Empleados</span>
                <i className="fa-solid fa-chalkboard" /></Link>
            </li>
            <li className='pb-5'>
              <Link to="/employeecreate" className='text-white text-2xl'><span className='m-3 hover:text-blue-400'>Registrar Empleados</span>
                <i className="fa-solid fa-chalkboard" /></Link>
            </li>
                        
          </ul>
        </nav>

        <div className="flex-2">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/About/:id" element={<About />} />
            <Route path="/Contact/:id" element={<Contact />} />

            <Route path="/Notes/:id" element={<Notes />} />
            <Route path="/RegistroCali/:id" element={<RegistroCali />} /> */}


            <Route path='/alumnos' element={<ShowAlumnos />} />
            <Route path='/alumnocreate' element={<CreateAlumno />} />
            <Route path='/alumnoedit/:id' element={<EditAlumno />} />

            <Route path='/calificaciones' element={<ShowCalificaciones />} />
            <Route path='/calificacioncreate' element={<CreateCalificacion />} />
            <Route path='/calificacionedit/:id' element={<EditCalificacion />} />

            <Route path="/evaluaciones" element={<ShowEvaluaciones />} />
            <Route path="/evaluacioncreate" element={<CreateEvaluacion />} />
            <Route path="/evaluacionedit/:id" element={<EditEvaluacion />} />

            <Route path="/tipos" element={<ShowTipos />} />
            <Route path="/tipocreate" element={<CreateTipo />} />
            <Route path="/tipoedit/:id" element={<EditTipo />} />

            <Route path="/employees" element={<ShowEmployees />} />
            <Route path="/employeecreate" element={<CreateEmployee />} />
            <Route path="/employeeedit/:id" element={<EditEmployee />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
