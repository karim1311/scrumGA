import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AlumnosList() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET a la API para obtener todos los alumnos
    axios.get('http://localhost:8000/api/alumnos')
      .then(response => {
        console.log(response);
        setAlumnos(response.data);
      })
      .catch(error => {
        console.error('Error al cargar los datos de los alumnos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Alumnos</h1>
      <table>
        <thead>
          <tr>
            <th>DNI</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Fecha de Nacimiento</th>
            <th>ID de Grupo</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map(alumno => (
            <tr key={alumno.id}>
              <td>{alumno.dni}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.apellido}</td>
              <td>{alumno.correo}</td>
              <td>{alumno.fecha_nacimiento}</td>
              <td>{alumno.grupo_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlumnosList;
