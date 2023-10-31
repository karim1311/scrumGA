import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api/calificacion/";

const EditCalificacion = () => {
  const [alumnoId, setAlumnoId] = useState("");
  const [evaluacionId, setEvaluacionId] = useState("");
  const [nota, setNota] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      alumno_id: alumnoId,
      evaluacion_id : evaluacionId,
      nota: nota,
      mensaje: mensaje,
    });
    navigate("/calificaciones");
  };

  useEffect(() => {
    const getCalificacionesById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setAlumnoId(response.data.alumno_id);
      setEvaluacionId(response.data.evaluacion_id);
      setNota(response.data.nota);
      setMensaje(response.data.mensaje);
    };
    getCalificacionesById();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="mt-5 text-amber-50"></div>
      <div className="flex flex-col items-center">
      <div className="edit w-auto">
      <h2 className="text-center font-bold text-2xl font-roboto mb-4">
          Editar Calificacion</h2>
        <form onSubmit={update} className="flex-col flex items-center form_edit">
          <div className="mb-3 block">
            <label className="form-label">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Alumno ID
              </span>
                </label>
            <input
              value={alumnoId}
              onChange={(e) => setAlumnoId(e.target.value)}
              type="text"
              className="mt-1 px-3 py-2 bg-[#323744] border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Evaluacion
              </span>
                </label>
            <input
              value={evaluacionId}
              onChange={(e) => setEvaluacionId(e.target.value)}
              type="text"
              className="mt-1 px-3 py-2 bg-[#323744]  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Nota
              </span>
                </label>
            <input
              value={nota}
              onChange={(e) => setNota(e.target.value)}
              type="text"
              className="mt-1 px-3 py-2 bg-[#323744]  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Mensaje
              </span>
                </label>
            <input
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              type="text"
              className="mt-1 px-3 py-2 bg-[#323744]  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
          <button type="submit" className="button">
            Update
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default EditCalificacion;



