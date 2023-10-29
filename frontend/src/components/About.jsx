import React, { useState, useEffect } from "react";

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
          <tr>
                <th class="p-3">ID</th>
                <th class="p-3">DNI</th>
                <th class="p-3 text-left">NOMBRE</th>
                <th class="p-3 text-left">APELLIDO</th>
                <th class="p-3 text-left">CORREO</th>
                <th class="p-3 text-left">FECHA DE NACIMIENTO</th>
                <th class="p-3 text-left">GRUPO</th>
                <th class="p-3 text-left">ACCIÓN</th>
           </tr>
        </thead>
        <tbody>
        {resultadosFiltrados.map((alumno) => (
            <tr key={alumno.id} class="bg-blue-200 lg:text-black text-center">
              <td class="p-3 font-extrabold"  >{alumno.id}</td>
              <td class="p-3"  >{alumno.dni}</td>
              <td class="p-3 font-medium capitalize">{alumno.nombre}</td>
              <td class="p-3 font-medium capitalize">{alumno.apellido}</td>
              <td class="p-3"  >{alumno.correo}</td> 
              <td class="p-3"  >{alumno.fecha_nacimiento}</td>
              <td class="p-3"  >{alumno.grupo_id}</td>
              <td class="p-3"  >
                <button onClick={() => handleDeleteAlumno(alumno.id)}>
                <i class="fa-solid fa-trash-can text-red-700"></i>
                </button>
              </td>
            </tr>
          ))}
        
        </tbody>
      </table>
    </div>
  </div>
</div>
   
  );
}

 