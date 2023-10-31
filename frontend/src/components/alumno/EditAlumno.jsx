import axios from "axios";
import { useState, useEffect } from "react";
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
    <div className="flex flex-col justify-center items-center">
      <div className="mt-5 text-amber-50">
        <p className="text-xl mb-4">Edita al alumno </p>
        <p className="max-w-screen-sm h-14 text-sm p-2 rounded">
          Bienvenido
          <br />
          Selecciona la accion que quieras realizar en las pestañas del menu de
          la izquierda
        </p>
      </div>
      <div className="edit">
  
        <h2 className="text-center font-bold text-2xl font-roboto mb-4">
          Editando alumno
        </h2>

        {/* esta es la vista de 2 X 3 solo es descomentar y comentar la otra y descomentar los estilos desde index.css*/}

        {/* <form onSubmit={update} class="custom-form">
  <div class="form-row">
    <label for="dni">DNI:</label>
    <input
      type="text"
      id="dni"
      value={dni}
      onChange={(e) => setDni(e.target.value)}
    />
  </div>

  <div class="form-row">
    <label for="nombre">Nombre:</label>
    <input
      type="text"
      id="nombre"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
    />
  </div>

  <div class="form-row">
    <label for="apellido">Apellido:</label>
    <input
      type="text"
      id="apellido"
      value={apellido}
      onChange={(e) => setApellido(e.target.value)}
    />
  </div>

  <div class="form-row">
    <label for="correo">Correo:</label>
    <input
      type="text"
      id="correo"
      value={correo}
      onChange={(e) => setCorreo(e.target.value)}
    />
  </div>

  <div class="form-row">
    <label for="fecha_nacimiento">Fecha de Nacimiento:</label>
    <input
      type="text"
      id="fecha_nacimiento"
      value={fecha_nacimiento}
      onChange={(e) => setFechaNacimiento(e.target.value)}
    />
  </div>

  <div class="form-row">
    <label for="grupo_id">Grupo:</label>
    <input
      type="number"
      id="grupo_id"
      min="1"
      max="5"
      name="grupo_id"
      value={grupo_id}
      onChange={(e) => setGrupoId(e.target.value)}
    />
  </div>

  <button type="submit" class="button">Actualizar</button>
</form> */}
        <form onSubmit={update} className="flex-col flex items-center form_edit">
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
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
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
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>

          <div>
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
                type="text"
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
              Actualizar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAlumno;
