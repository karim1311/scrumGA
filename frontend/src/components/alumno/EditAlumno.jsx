import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api/alumno/";

const EditAlumno = () => {
  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [fecha_nacimiento, setFechaNacimiento] = useState("");
  const [grupo_id, setGrupoId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      dni: dni,
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      fecha_nacimiento: fecha_nacimiento,
      grupo_id: grupo_id,
    });
    navigate("/");
  };

  useEffect(() => {
    const getAlumnoById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setDni(response.data.dni);
      setNombre(response.data.nombre);
      setApellido(response.data.apellido);
      setCorreo(response.data.correo);
      setFechaNacimiento(response.data.fecha_nacimiento);
      setGrupoId(response.data.grupo_id);
    };
    getAlumnoById();
  }, []);
  return (
    <div class="flex flex-col justify-center items-center">
      <div class="mt-5">
        <p class="text-xl mb-4">Edita al alumno </p>
        <p class="max-w-screen-sm h-14 text-sm p-2 rounded">
          Bienvenido
          <br />
          Selecciona la accion que quieras realizar en las pestañas del menu de
          la izquierda
        </p>
      </div>
      <div class="w-[50%] bg-blue-200  rounded-lg mt-9 shadow-lg">
      <h2 class="text-center font-bold text-2xl font-roboto mb-4">Editando alumno</h2>
      <form onSubmit={update} className="flex-col flex items-center">
        <div className="mb-3 block">
          <label className="form-label">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              DNI
            </span>
          </label>
          <input
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            type="text"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
        </div>

        <div className="mb-3">
          <label className="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Nombre
            </span>
          </label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Apellido
            </span>
          </label>
          <input
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            type="text"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              correo
            </span>
          </label>
          <input
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            type="text"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Fecha de Nacimiento
            </span>
          </label>
          <input
            value={fecha_nacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            type="text"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
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

        <button type="submit" class=" mt-5 mb-3 bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
          Actualizar
        </button>
      </form>


      </div>
      
    </div>
  );
};

export default EditAlumno;
