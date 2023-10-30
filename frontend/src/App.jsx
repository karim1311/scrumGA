import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Notes from "./components/Notes";
import RegistroCali from "./components/RegistroCali";

import CreateAlumno from "./components/alumno/CreateAlumno";
import EditAlumno from "./components/alumno/EditAlumno";
import ShowAlumnos from "./components/alumno/ShowAlumnos";

import CreateCalificaciones from "./components/calificaciones/CreateCalificaciones";
import EditCalificaciones from "./components/calificaciones/EditCalificaciones";
import ShowCalificaciones from "./components/calificaciones/ShowCalificaciones";

import CreateEvaluaciones from "./components/evaluaciones/CreateEvaluaciones";
import EditEvaluaciones from "./components/evaluaciones/EditEvaluaciones";
import ShowEvaluaciones from "./components/evaluaciones/ShowEvaluaciones";

import CreateTipos from "./components/tipos/CreateTipos";
import EditTipos from "./components/tipos/EditTipos";
import ShowTipos from "./components/tipos/ShowTipos";

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
            <li className='pb-5'>
              <Link to="/About/1" className='text-white text-2xl'><span className='m-3  hover:text-blue-400'>Lista de Alumnos</span>
                <i className="fa-solid fa-graduation-cap" /></Link>
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
            <Link to="/employees" className='text-white text-2xl'><span className='m-3 hover:text-blue-400'>Empleados</span>
            <i className="fa-solid fa-chalkboard"/></Link>
          </li>
          <li className='pb-5'>
            <Link to="/employeecreate" className='text-white text-2xl'><span className='m-3 hover:text-blue-400'>Crear empleado</span>
            <i className="fa-solid fa-chalkboard"/></Link>
          </li>

          
            <li className="pb-5 bg-">
              <Link to="/" className="text-white pb-15 text-2xl">
              <i class="fa-solid fa-chalkboard-user mr-3" />
                <span className="m-3 mr-16  hover:text-blue-400">Inicio</span>
              </Link>
            </li>
            <hr className="mb-2"/>
            <li className="pb-5">
              <Link to="/About/1" className="text-white text-2xl">
              <i class="fa-solid fa-graduation-cap mr-3" />
                <span className="m-3  hover:text-blue-400">
                  Lista de Alumnos
                </span>
                
              </Link>
            </li>
            <li className="pb-5">
              <Link to="/Contact/2" className="text-white text-2xl">
              <i class="fa-solid fa-user-pen mr-3"/>
                <span className="m-3  hover:text-blue-400">
                  Registrar Alumno
                </span>
                
              </Link>
            </li>
            <li className="pb-5">
              <Link to="/Notes/3" className="text-white text-2xl">
              <i class="fa-solid fa-chalkboard mr-3"/>
                <span className="m-3  hover:text-blue-400">Calificaciones</span>

                
              </Link>
            </li>
            <li className="pb-5">
              <Link to="/RegistroCali/4" className="text-white text-2xl">
              <i class="fa-solid fa-pen-to-square mr-3"></i>
                <span className="m-3  hover:text-blue-400">
                  Registrar Calificación
                </span>
                
              </Link>
            </li>


            <hr className="mb-2"/>
            <li className="pb-5">
              <Link to="/employees" className="text-white text-2xl">
              <i class="fa-solid fa-building mr-3" />
                <span className="m-3 hover:text-blue-400 ">Empleados</span>
                
              </Link>
            </li>
            <li className="pb-5">
              <Link to="/employeecreate" className="text-white text-2xl">
              <i class="fa-solid fa-building-user mr-3" />
                <span className="m-3 hover:text-blue-400 ">Crear empleado</span>
                
              </Link>
            </li>

                              {/* esto de abajo ya esta implementado arriba */}
           {/*  <hr /> 
            <li className="pb-5">
              <Link to="/alumnos" className="text-white text-2xl">
              <i class="fa-solid fa-graduation-cap mr-3" />
                <span className="m-3">Alumnos</span>
                
              </Link>
            </li>
            <li className="pb-5">
              <Link to="/alumnocreate" className="text-white text-2xl">
              <i class="fa-solid fa-user-pen mr-3"></i>
                <span className="m-3">Registrar Alumno</span>
                
              </Link>
            </li> */}
          </ul>
        </nav>

        <div className="flex-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About/:id" element={<About />} />
            <Route path="/Contact/:id" element={<Contact />} />

            <Route path="/Notes/:id" element={<Notes />} />
            <Route path="/RegistroCali/:id" element={<RegistroCali />} />


            <Route path='/alumnos' element={<ShowAlumnos />} />
            <Route path='/alumnocreate' element={<CreateAlumno />} />
            <Route path='/alumnoedit/:id' element={<EditAlumno />} />

            <Route path='/calificaciones' element={<ShowCalificaciones />} />
            <Route path='/calificacionescreate' element={<CreateCalificaciones />} />
            <Route path='/calificacionesedit/:id' element={<EditCalificaciones />} />

            <Route path="/evaluaciones" element={<ShowEvaluaciones />} />
            <Route path="/evaluacionescreate" element={<CreateEvaluaciones />} />
            <Route path="/evaluacionesedit/:id" element={<EditEvaluaciones />} />

            <Route path="/tipos" element={<ShowTipos />} />
            <Route path="/tiposcreate" element={<CreateTipos />} />
            <Route path="/tiposedit/:id" element={<EditTipos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
