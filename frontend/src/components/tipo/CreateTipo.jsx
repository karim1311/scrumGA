import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api/tipo";
const CreateTipo = () => {
  const [descripcion, setDescripcion] = useState("");
  const [porcentaje, setPorcentaje] = useState("");
  const [rango, setRango] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, {
      descripcion: descripcion,
      porcentaje: porcentaje,
      rango: rango,
    });
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="mt-5 text-amber-50">
        <p className="text-xl mb-4">Crea un tipo </p>
        <p className="max-w-screen-sm h-14 text-sm p-2 rounded">
          Bienvenido
          <br />
          Selecciona la accion que quieras realizar en las pestañas del menu de
          la izquierda
        </p>
      </div>
      <div className="crud">
        <h2 className="text-center font-bold text-2xl font-roboto mb-4">
          Crear un nuevo Tipo
        </h2>
        <form onSubmit={store} className="flex-col flex items-center form_crud">
          <div className="mb-3">
            <label className="form-label">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Descripción
              </span>
            <textarea
              cols="25"
              rows="5"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  tefocus:outline-none  block w-full rounded-md sm:text-sm focus:ring-1 text-slate-700"
              placeholder="Escribe tu descripción"
            />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                PORCENTAJE
              </span>
                </label>
            <input
              value={porcentaje}
              onChange={(e) => setPorcentaje(e.target.value)}
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                RANGO
              </span>
                </label>
            <input
              value={rango}
              onChange={(e) => setRango(e.target.value)}
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
          <button type="submit" className="button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTipo;
