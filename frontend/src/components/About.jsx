import React, { useState, useEffect } from "react";

export default function alumnos() {
  const [alumno, setAlumno] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/api/alumnos");
        const data = await response.json();
        setAlumno(data);
       // console.log(data);
      } catch (error) {
        console.error("Error al obtener las notas:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center mt-20">
      <h2 className="text-center mb-8 text-2xl font-bold">Calificaciones</h2>
      <table className="border-separate border-spacing-2 border border-slate-500">
        <thead>
            <tr>
                <th>ID</th>
                <th>DNI</th>
                <th>NOMBRE</th>
                <th>APELLIDO</th>
                <th>CORREO</th>
                <th>FECHA DE NACIMIENTO</th>
                <th>GRUPO</th>
                <th>ACCIÓN</th>

            </tr>
        </thead>
        
        <tbody>
          {alumno.map((alumno) => (
            <tr key={alumno.id}>
              <td className="border border-slate-600">{alumno.id}</td>
              <td className="border border-slate-600">{alumno.dni}</td>
              <td className="border border-slate-600">{alumno.nombre}</td>
              <td className="border border-slate-600">{alumno.apellido}</td>
              <td className="border border-slate-600">{alumno.correo}</td> 
              <td className="border border-slate-600">{alumno.fecha_nacimiento}</td>
              <td className="border border-slate-600">{alumno.grupo_id}</td>
              <td className="border border-slate-600">
                <button onClick={() => handleDeleteAlumno(alumno.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}