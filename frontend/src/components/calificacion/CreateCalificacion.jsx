import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api/calificacion";

const CreateCalificacion = () => {
    const [alumno_id, setAlumnoId] = useState("");
    const [evaluacion_id, setEvaluacionId] = useState("");
    const [nota, setNota] = useState("");
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {
            alumno_id: alumno_id,
            evaluacion_id: evaluacion_id,
            nota: nota,
            mensaje: mensaje,
        });
        navigate("/");
    };
    
    return (
        <div className="flex flex-col justify-center items-center h-screen">
      <div className="mt-5 text-amber-50">
        <p className="text-xl mb-4">Crea una calificación </p>
        <p className="max-w-screen-sm h-14 text-sm p-2 rounded">
          Bienvenido
          <br />
          Selecciona la accion que quieras realizar en las pestañas del menu de
          la izquierda
        </p>
      </div>
      <div className="crud">
      <h2 className="text-center font-bold text-2xl font-roboto mb-4">
          Crear nueva Calificación</h2>
            <form onSubmit={store}className="flex-col flex items-center form_crud">
          <div className="mb-3">
                    <label className="form-label">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Alumno
              </span>
                        </label>
                    <input
                        value={alumno_id}
                        onChange={(e) => setAlumnoId(e.target.value)}
                        type="text"
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block w-full rounded-md sm:text-sm focus:ring-1"
            />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Evaluación
              </span>
                        </label>
                    <input
                        value={evaluacion_id}
                        onChange={(e) => setEvaluacionId(e.target.value)}
                        type="text"
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block w-full rounded-md sm:text-sm focus:ring-1"
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
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block w-full rounded-md sm:text-sm focus:ring-1"
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
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block w-full rounded-md sm:text-sm focus:ring-1"
            />
                </div>
                <button type="submit" className="button btn btn-success">
                    Save
                </button>
            </form>
        </div>
        </div>
    );
};

export default CreateCalificacion;
