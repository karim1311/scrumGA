import React, { useState } from 'react';
import axios from 'axios';

function RegistrarTipoEvaluacion() {
  const [descripcion, setDescripcion] = useState('');
  const [porcentaje, setPorcentaje] = useState('');
  const [rango, setRango] = useState('');

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handlePorcentajeChange = (event) => {
    setPorcentaje(event.target.value);
  };

  const handleRangoChange = (event) => {
    setRango(event.target.value);
  };

  const handleRegistrarTipoEvaluacion = () => {
    // Crear un objeto con los datos del tipo de evaluación
    const nuevoTipoEvaluacion = {
      descripcion,
      porcentaje,
      rango,
    };

    // Enviar los datos al servidor utilizando Axios
    axios.post('http://localhost:8000/api/tipos', nuevoTipoEvaluacion)
      .then(response => {
        // Manejar la respuesta del servidor si es necesario
        console.log('Tipo de evaluación registrado con éxito:', response.data);

        // Limpiar los campos después de registrar el tipo de evaluación
        setDescripcion('');
        setPorcentaje('');
        setRango('');
      })
      .catch(error => {
        console.error('Error al registrar el tipo de evaluación:', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Registrar Tipo de Evaluación</h1>
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="porcentaje">
            Porcentaje:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="porcentaje"
            type="number"
            placeholder="Porcentaje"
            value={porcentaje}
            onChange={handlePorcentajeChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rango">
            Rango:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rango"
            type="number"
            placeholder="Rango"
            value={rango}
            onChange={handleRangoChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleRegistrarTipoEvaluacion}
        >
          Registrar Tipo de Evaluación
        </button>
      </div>
    </div>
  );
}

export default RegistrarTipoEvaluacion;
