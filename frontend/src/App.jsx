import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Notes from "./components/Notes";
// import RegistroCali from "./components/RegistroCali";

import CreateEmployees from "./components/employee/CreateEmployee";
import EditEmployees from "./components/employee/EditEmployee";
import ShowEmployees from "./components/employee/ShowEmployees";

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
      <div className="flex w-screen h-screen">
        <nav className="flex-1 bg-[#323744] h-[screen] drop-shadow-xl" >
          <div className='text-[#04b2bf] text-2xl text-center pt-5'>
            <h2>Admin</h2>
            <p>[name Admin]</p>
          </div>

          <ul className='pl-5 pt-16 w-[300px] flex flex-col text-[#04b2bf]'>
            <li className='pb-5 bg-'>
              <Link to="/" className=' pb-15 text-xl'><span className='m-2   hover:text-blue-400'>Inicio</span>
                <i className="fa-solid fa-chalkboard-user" /></Link>
            </li>
            <li className='pb-5'>
              <Link to="/alumnos" className='text-[#04b2bf] text-xl'><span className='m-2  hover:text-blue-400'>Lista de Alumnos</span>
                <i className="fa-solid fa-graduation-cap" /></Link>
            </li>
            {/* <li className='pb-5'>
              <Link to="/alumnocreate" className='text-xl'><span className='m-2  hover:text-blue-400'>Registrar  Alumno</span>
                <i className="fa-solid fa-user-pen"></i></Link>
            </li> */}

            <li className='pb-5'>
              <Link to="/calificaciones" className='text-xl'><span className='m-2  hover:text-blue-400'>Calificaciones</span>
                <i className="fa-solid fa-chalkboard" /></Link>
            </li>
            {/* <li className='pb-5'>
              <Link to="/calificacioncreate" className='text-xl'><span className='m-2  hover:text-blue-400'>Registrar Calificación</span>
                <i className="fa-solid fa-pen-to-square"></i></Link>
            </li> */}

            <li className='pb-5'>
              <Link to="/evaluaciones" className='text-xl'><span className='m-3 hover:text-blue-400'>Evaluaciones</span>
                <i className="fa-solid fa-chalkboard" /></Link>
            </li>
            {/* <li className='pb-5'>
              <Link to="/evaluacioncreate" className='text-xl'><span className='m-2 hover:text-blue-400'>Registrar Evaluaciones</span>
                <i className="fa-solid fa-chalkboard" /></Link>
            </li> */}

            <li className='pb-5'>
              <Link to="/employees" className='text-xl'><span className='m-2 hover:text-blue-400'>Empleados</span>
                <i className="fa-solid fa-chalkboard" /></Link>
            </li>
            {/* <li className='pb-5'>
              <Link to="/employeecreate" className='text-xl'><span className='m-2 hover:text-blue-400'>Registrar Empleados</span>
                <i className="fa-solid fa-chalkboard" /></Link>
            </li> */}

            <li className="pb-5">
              <Link to="/tipos" className="text-xl">
                <i className="fa-solid fa-graduation-cap mr-2" />
                <span className="m-2">Tipos</span>
              </Link>
            </li>
            {/* <li className="pb-5">
              <Link to="/tipocreate" className="text-xl">
                <i className="fa-solid fa-user-pen mr-2"></i>
                <span className="m-2">Registrar Tipo</span>
              </Link>
              </li> */}
          </ul>
        </nav>

        <div className="flex-2 flex flex-row justify-center items-baseline mt-20 w-screen">

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
            <Route path='/calificacioncreate' element={<CreateCalificaciones />} />
            <Route path='/calificacionedit/:id' element={<EditCalificaciones />} />

            <Route path="/evaluaciones" element={<ShowEvaluaciones />} />
            <Route path="/evaluacioncreate" element={<CreateEvaluaciones />} />
            <Route path="/evaluacionedit/:id" element={<EditEvaluaciones />} />

            <Route path="/tipos" element={<ShowTipos />} />
            <Route path="/tipocreate" element={<CreateTipos />} />
            <Route path="/tipoedit/:id" element={<EditTipos />} />

            <Route path="/employees" element={<ShowEmployees />} />
            <Route path="/employeecreate" element={<CreateEmployees />} />
            <Route path="/employeeedit/:id" element={<EditEmployees />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
