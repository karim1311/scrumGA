import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EditAlumno from "./alumno/EditAlumno";

export default function Alumnos() {
  const [alumno, setAlumno] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [resultadosFiltrados, setResultadosFiltrados] = useState([]); // Inicializa con un array vacío

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/api/alumnos");
        const data = await response.json();
        setAlumno(data);
      } catch (error) {
        console.error("Error al obtener las notas:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    // Filtrar los resultados basados en el valor de búsqueda
    const resultados = alumno.filter((alumno) =>
      alumno.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setResultadosFiltrados(resultados);
  }, [alumno, busqueda]);

  const handleInputChange = (event) => {
    const valorBusqueda = event.target.value;
    setBusqueda(valorBusqueda);
  };

  const handleEditAlumno = (event) => {
<Link>
</Link>
  }
  //console.log(alumno);
  //console.log(resultadosFiltrados);
  return (
    <div class="flex items-center justify-center min-h-screen bg-white">
  <div class="col-span-12">
    <div class="overflow-auto lg:overflow-visible">
      <div class="flex lg:justify-between border-b-2 border-fuchsia-900 pb-1">
        <h2 class="text-2xl text-gray-500 font-bold">Todos los Alumnos</h2>
        <div className="text-center flex-auto">
        <input
          type="text"
          name="busca"
          placeholder="Search..."
          className="
            w-1/3
            py-2
            border-b-2 border-blue-600
            outline-none
            focus:border-yellow-400
          "
          value={busqueda}
          onChange={handleInputChange}
        />
      </div>
      </div>
      <table class="table text-gray-400 border-separate space-y-6 text-sm">
        <thead class="bg-blue-500 text-white">
          <tr className="tra">
                <th className="p-3">ID</th>
                <th className="p-3">DNI</th>
                <th className="p-3 text-left">NOMBRE</th>
                <th className="p-3 text-left">APELLIDO</th>
                <th className="p-3 text-left">CORREO</th>
                <th className="p-3 text-left">FECHA DE NACIMIENTO</th>
                <th className="p-3 text-left">GRUPO</th>
                <th className="p-3 text-left">ACCIÓN</th>
           </tr>
        </thead>
        <tbody>
        {resultadosFiltrados.map((alumno) => (
            <tr key={alumno.id} className="bg-blue-200 lg:text-black text-center tra">
              <td className="p-3 font-extrabold"  >{alumno.id}</td>
              <td className="p-3"  >{alumno.dni}</td>
              <td className="p-3 font-medium capitalize">{alumno.nombre}</td>
              <td className="p-3 font-medium capitalize">{alumno.apellido}</td>
              <td className="p-3"  >{alumno.correo}</td> 
              <td className="p-3"  >{alumno.fecha_nacimiento}</td>
              <td className="p-3"  >{alumno.grupo_id}</td>
              <td className="p-3"  >
                <Link to={`/alumnoedit/${alumno.id}`} className="mr-3">
                <i class="fa-solid fa-pencil text-green-700"/>
                </Link>
                <button className="ml-3" onClick={() => handleDeleteAlumno(alumno.id)}>
                <i class="fa-solid fa-trash-can text-red-700"/>
                </button>
              </td>
>>>>>
            </tr>
          ))}
        </tbody>
      </table>
      <Routes>
      <Route path={`/alumnoedit/${alumno.id}`} element={<EditAlumno />} />
      </Routes>
>
    </div>
  </div>
</div>

  );
}

