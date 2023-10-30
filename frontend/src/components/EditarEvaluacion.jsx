import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditarEvaluacion() {
  const { id } = useParams();
  const [evaluacion, setEvaluacion] = useState({});
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/evaluaciones/${id}`)
      .then(response => {
        setEvaluacion(response.data);
        setDescripcion(response.data.descripcion);
        setFecha(response.data.fecha);
      })
      .catch(error => {
        console.error('Error al obtener los datos de la evaluación:', error);
      });
  }, [id]);

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleFechaChange = (event) => {
    setFecha(event.target.value);
  };

  const handleGuardarCambios = () => {
    const datosActualizados = {
      descripcion,
      fecha,
    };

    axios.put(`http://localhost:8000/api/evaluaciones/${evaluacion.id}`, datosActualizados)
      .then(response => {
        console.log('Cambios guardados con éxito:', response.data);
      })
      .catch(error => {
        console.error('Error al guardar los cambios:', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Editar Evaluación</h1>
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
          onClick={handleGuardarCambios}
        >
          Guardar Cambios
        </button>
      </div>
    </div>
  );
}

export default EditarEvaluacion;
