import React, { useState } from 'react';
import axios from 'axios';

function RegistrarEvaluacion() {
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleFechaChange = (event) => {
    setFecha(event.target.value);
  };

  const handleRegistrarEvaluacion = () => {
    // Crear un objeto con los datos de la evaluación
    const nuevaEvaluacion = {
      descripcion,
      fecha,
    };

    // Enviar los datos al servidor utilizando Axios
    axios.post('http://localhost:8000/api/evaluaciones', nuevaEvaluacion)
      .then(response => {
        // Manejar la respuesta del servidor si es necesario
        console.log('Evaluación registrada con éxito:', response.data);

        // Limpiar los campos después de registrar la evaluación
        setDescripcion('');
        setFecha('');
      })
      .catch(error => {
        console.error('Error al registrar la evaluación:', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Registrar Evaluación</h1>
      <div className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
            Descripción:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="descripcion"
            type="text"
            placeholder="Descripción"
            value={descripcion}
            onChange={handleDescripcionChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha">
            Fecha:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fecha"
            type="date"
            value={fecha}
            onChange={handleFechaChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleRegistrarEvaluacion}
        >
          Registrar Evaluación
        </button>
      </div>
    </div>
  );
}

export default RegistrarEvaluacion;
