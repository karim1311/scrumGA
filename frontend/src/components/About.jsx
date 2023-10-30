import React, { useState } from 'react';

function About() {
  const [alumnos, setAlumnos] = useState([
    { id: 1, nombre: "Juan", apellido: "Pérez" },
    { id: 2, nombre: "María", apellido: "López" },
  ]);

  const handleDeleteAlumno = (id) => {
    const updatedAlumnos = alumnos.filter((alumno) => alumno.id !== id);
    setAlumnos(updatedAlumnos);
  }

  return (
    <div className="relative overflow-x-auto rounded-lg bg-[#323744] h-screen  p-4">
      <h2 class="text-center mb-8 text-2xl font-bold text-[#06ebfc]  ">Lista de Alumnos</h2>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead>
          <tr>
            <th class="border border-slate-600">ID</th>
            <th class="border border-slate-600">Dni</th>
            <th class="border border-slate-600">Nombre</th>
            <th class="border border-slate-600">Apellido</th>
            <th class="border border-slate-600">Correo</th>
            <th class="border border-slate-600">Grupo_id</th>
            <th class="border border-slate-600">Acciones</th>
            

          </tr>
        </thead>
  <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.id}>
              <td class="border border-slate-600">{alumno.id}</td>
              <td class="border border-slate-600">{alumno.dni}</td>
              <td class="border border-slate-600">{alumno.nombre}</td>
              <td class="border border-slate-600">{alumno.apellido}</td>
              <td class="border border-slate-600">{alumno.correo}</td>
              <td class="border border-slate-600">{alumno.grupo_id}</td>
              <td class="border border-slate-600">
                <button onClick={() => handleDeleteAlumno(alumno.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
</table>
      {/* <table >
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.id}>
              <td>{alumno.id}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.apellido}</td>
              <td>
                <button onClick={() => handleDeleteAlumno(alumno.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default About;


