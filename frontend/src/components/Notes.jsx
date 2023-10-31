
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegistroCali from "./components/RegistroCali"

// export default function Notes() {
//   const [notas, setNotas] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch("http://localhost:8000/api/calificaciones");
//         const data = await response.json();
//         setNotas(data);
//         console.log(data);
//       } catch (error) {
//         console.error("Error al obtener las notas:", error);
//       }
//     }

//     fetchData();
//   }, []);


  return (
    <div className="flex justify-center flex-col items-center mt-7">
      <h2 className="text-center mb-8 text-2xl font-bold font-roboto">Calificaciones</h2>
      <table class="table text-gray-400 border-separate space-y-6 text-sm">
        <thead class="bg-blue-500 text-white">
          <tr className="trc">
                <th className="p-3" >ID</th>
                <th className="p-3 text-left" >NOMBRE</th>
                <th className="p-3 text-left" >EVALUACIÓN</th>
                <th className="p-3 text-left" >NOTA</th>
                <th className="p-3 text-center">MENSAJE</th>
                <th className="p-3 text-left" >Accion</th>
            </tr>

        </thead>
        <tbody>
        {notas.map((nota) => (
            <tr key={nota.id} className="bg-blue-200 lg:text-black text-center trc">
              <td className="p-3 font-extrabold">{nota.id}</td>
              <td className="p-3 font-medium capitalize">{nota.nombre}</td>
              <td className="p-3 font-medium capitalize">{nota.evaluacion}</td>
              <td className="p-3">{nota.nota}</td>
              <td className="p-3">{nota.mensaje}</td>
              <td className="p-3">
              <Link to={`/alumnoedit/${alumno.id}`} className="mr-3">
                      <i className="fa-solid fa-pencil text-green-700" />
                    </Link>
                <button onClick={() => handleDeleteNota(nota.id)}>
                <i class="fa-solid fa-trash-can text-red-700"/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Routes>
            <Route path={`/alumnoedit/${alumno.id}`} element={<EditAlumno />} />
          </Routes>
    </div>
  );
}



 