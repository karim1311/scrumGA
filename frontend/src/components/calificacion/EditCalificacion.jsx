import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api/calificacion/";

const EditCalificacion = () => {
  const [descripcion, setDescripcion] = useState("");
  const [porcentaje, setPorcentaje] = useState("");
  const [rango, setRango] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      descripcion: descripcion,
      porcentaje: porcentaje,
      rango: rango,
    });
    navigate("/");
  };

  useEffect(() => {
    const getTiposById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setDescripcion(response.data.descripcion);
      setPorcentaje(response.data.porcentaje);
      setRango(response.data.rango);
    };
    getTiposById();
  }, []);
  return (
    //<div className=" ">
    <div className="flex flex-col justify-center items-center">
    <div className="mt-5 text-amber-50">
         
            </div>
            <div className="edit">
                 <h2 className="text-center font-bold text-2xl font-roboto mb-4">
              Editar Tipo
            </h2>
            <form
              onSubmit={update}
              className="flex-col flex items-center form_edit"
            >
              <div className="mb-3 block">
                <label className="form-label">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Descripción
                  </span>
                </label>
                <input
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  type="text"
                  placeholder="Descripción"
                  className="mt-1 px-3 py-2 bg-[#323744] border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Porcentaje
                  </span>
                </label>
                <input
                  value={porcentaje}
                  onChange={(e) => setPorcentaje(e.target.value)}
                  type="text"
                  placeholder="Porcentaje"
                  className="mt-1 px-3 py-2 bg-[#323744]  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Rango
                  </span>
                </label>
                <input
                  value={rango}
                  onChange={(e) => setRango(e.target.value)}
                  type="text"
                  placeholder="Rango"
                  className="mt-1 px-3 py-2 bg-[#323744]  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </div>
              <button type="submit" className="button">
                Update
              </button>
            </form>
          </div>
       </div>
     
  );
};

export default EditCalificacion;
