import React, { useState, useEffect } from "react";

export default function Notes() {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/api/calificaciones");
        const data = await response.json();
        setNotas(data);
        console.log(data);
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
                <th>NOMBRE</th>
                <th>EVALUACIÓN</th>
                <th>NOTA</th>
                <th>MENSAJE</th>
            </tr>
        </thead>
        
        <tbody>
          {notas.map((nota) => (
            <tr key={nota.id}>
              <td className="border border-slate-600">{nota.id}</td>
              <td className="border border-slate-600">{nota.nombre}</td>
              <td className="border border-slate-600">{nota.evaluacion}</td>
              <td className="border border-slate-600">{nota.nota}</td>
              <td className="border border-slate-600">{nota.mensaje}</td>
              <td className="border border-slate-600">
                <button onClick={() => handleDeleteAlumno(nota.id)}>
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
