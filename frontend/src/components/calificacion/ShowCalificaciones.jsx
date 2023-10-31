import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";
const ShowCalificaciones = () => {
  const [calificaciones, setCalificaciones] = useState([]);
  useEffect(() => {
    getAllCalificaciones();
  }, []);

  const getAllCalificaciones = async () => {
    const response = await axios.get(`${endpoint}/calificaciones`);
    setCalificaciones(response.data);
  };

  const deleteCalicacion = async (id) => {
    await axios.delete(`${endpoint}/calificacion/${id}`);
    getAllCalificaciones();
  };
  return (
    <div className="bg-[#1f252e] h-screen flex-col flex justify-center items-center">
      <div className="d-grid gap-2">
        <Link
          to="/calificacioncreate" className="button btn-lg mt-2 mb-2">
        Create
        </Link>
      </div>
      <table className="table table-striped border-separate space-y-6 text-sm">
        <thead className="bg-[#434a5a] text-white">
          <tr className="trb">
            <th className="p-3">Alumno Id</th>
            <th className="p-3">Evaluación Id</th>
            <th className="p-3">Nota</th>
            <th className="p-3">Mensaje</th>
            <th className="p-3">Acción</th>
          </tr>
        </thead>
        <tbody>
          {calificaciones.map((calificacion) => (
            <tr key={calificacion.id} className="bg-[#323846] lg:text-white text-center trb">
              <td className="p-3">{calificacion.alumno_id}</td>
              <td className="p-3">{calificacion.evaluacion_id}</td>
              <td className="p-3">{calificacion.nota}</td>
              <td className="p-3">{calificacion.mensaje}</td>
              <td >
                <Link
                  to={`/calificacionedit/${calificacion.id}`}
                  className="mr-3"
                >
                  <i className="fa-solid fa-pencil text-green-700"></i>
                </Link>
                <button
                  onClick={() => deleteCalicacion(calificacion.id)}
                  className="btn btn-danger"
                >
                  <i className="fa-solid fa-trash-can text-red-700"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowCalificaciones;
