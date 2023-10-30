import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom



function ListarEvaluaciones() {
  const [evaluaciones, setEvaluaciones] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET a la API para obtener todas las evaluaciones
    axios.get('http://localhost:8000/api/evaluaciones')
      .then(response => {
        setEvaluaciones(response.data);
      })
      .catch(error => {
        console.error('Error al cargar los datos de las evaluaciones:', error);
      });
  }, []);

  const handleBorrar = (id) => {
    // Implementa la lógica para borrar la evaluación con el ID proporcionado.
    console.log('Borrar evaluación con ID:', id);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Evaluaciones</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Descripción</th>
            <th className="border p-2">Fecha</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {evaluaciones.map(evaluacion => (
            <tr key={evaluacion.id} className="text-center">
              <td className="border p-2">{evaluacion.id}</td>
              <td className="border p-2">{evaluacion.descripcion}</td>
              <td className="border p-2">{evaluacion.fecha}</td>
              <td className="border p-2">
                <Link to={`/EditarEvaluacion/${evaluacion.id}`} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Editar
                </Link>
                <button
                  onClick={() => handleBorrar(evaluacion.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover-bg-red-600"
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      
    </div>
  );
}

export default ListarEvaluaciones;
