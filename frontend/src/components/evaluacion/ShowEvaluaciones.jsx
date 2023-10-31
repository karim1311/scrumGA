import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";
const ShowEvaluaciones = () => {
  const [evaluaciones, setEvaluaciones] = useState([]);
  useEffect(() => {
    getAllEvaluaciones();
  }, []);
  const getAllEvaluaciones = async () => {
    const response = await axios.get(`${endpoint}/evaluaciones`);
    setEvaluaciones(response.data);
  };
  const deleteEvaluacion = async (id) => {
    await axios.delete(`${endpoint}/evaluacion/${id}`);
    getAllEvaluaciones();
  };
  return (
    <div className="bg-[#1f252e] h-screen flex-col flex justify-center items-center">
      <div className="flex justify-start w-5/6 p-4">
        <Link to="/evaluacioncreate" className="button btn-lg mt-2 mb-2">
          Crear Evaluación
        </Link>
      </div>
      <table className="table table-striped border-separate space-y-6 text-sm">
        <thead className="bg-[#434a5a] text-white">
          <tr className="trb">
            <th className="p-3">DESCRIPCIÓN</th>
            <th className="p-3">TIPO</th>
            <th className="p-3">FECHA (AA/MM/DD)</th>
            <th className='p-3'>ACCIÓN</th>
          </tr>
        </thead>
        <tbody>
          {evaluaciones.map((evaluacion) => (
            <tr key={evaluacion.id}
            className="bg-[#323846] lg:text-white text-center trb"
            >
              <td className="p-3">{evaluacion.descripcion}</td>
              <td className="p-3">{evaluacion.tipo_id}</td>
              <td className="p-3">{evaluacion.fecha}</td>
              <td className="p-3">
                <Link to={`/evaluacionedit/${evaluacion.id}`} className="mr-3">
                  <i className="fa-solid fa-pencil text-green-700" />
                </Link>
                <button
                  className="ml-3"
                  onClick={() => deleteEvaluacion(evaluacion.id)}
                >
                 <i className="fa-solid fa-trash-can text-red-700" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowEvaluaciones;
