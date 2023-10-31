import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api/alumno";
const CreateAlumno = () => {
  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [fecha_nacimiento, setFechaNacimiento] = useState("");
  const [grupo_id, setGrupoId] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, {
      dni: dni,
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      fecha_nacimiento: fecha_nacimiento,
      grupo_id: grupo_id,
    });
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="mt-5 text-amber-50">
        <p className="text-xl mb-4">Registrar alumno </p>
        <p className="max-w-screen-sm h-14 text-sm p-2 rounded">
          Bienvenido
          <br />
          Selecciona la accion que quieras realizar en las pestañas del menu de
          la izquierda
        </p>
      </div>

      <div className="edit">
        <h2 className="text-center font-bold text-2xl font-roboto mb-4">
          Registrar Alumno
        </h2>
        <form onSubmit={store} className="flex-col flex items-center form_edit">
          <div className="mb-3 block">
            <label className="form-label">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                DNI
              </span>
            </label>
            <input
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              type="text"
              placeholder="identificación"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>

          <div className="mb-3 block">
            <label className="form-label">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Nombre
              </span>
            </label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              placeholder="Nombre completo"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Apellido
              </span>
            </label>
            <input
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              type="text"
              placeholder="Apellidos completos"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                correo
              </span>
            </label>
            <input
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              type="text"
              placeholder="E-mail"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Fecha de Nacimiento
              </span>
            </label>
            <input
              value={fecha_nacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              type="date"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Grupo
              </span>
            </label>
            <input
              value={grupo_id}
              onChange={(e) => setGrupoId(e.target.value)}
              type="number"
              min={"1"}
              max={"5"}
              name="grupo_id"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>

          <button type="submit" className=" button">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAlumno;
