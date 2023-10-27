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
    <div class="flex justify-center flex-col items-center mt-40">
      <h2 class="text-center mb-8 text-2xl font-bold">Lista de Alumnos</h2>
      <table class="border-separate border-spacing-2 border border-slate-500">
      <thead>
          <tr>
            <th class="border border-slate-600">ID</th>
            <th class="border border-slate-600">Nombre</th>
            <th class="border border-slate-600">Apellido</th>
            <th class="border border-slate-600">Acciones</th>
          </tr>
        </thead>
  <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.id}>
              <td class="border border-slate-600">{alumno.id}</td>
              <td class="border border-slate-600">{alumno.nombre}</td>
              <td class="border border-slate-600">{alumno.apellido}</td>
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
