import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const ShowAlumnos = () => {
  const [busqueda, setBusqueda] = useState("");
  const [resultadosFiltrados, setResultadosFiltrados] = useState([]); // Inicializa con un array vacío

  const [alumnos, setAlumnos] = useState([]);
  useEffect(() => {
    getAllAlumnos();
  }, []);

  const getAllAlumnos = async () => {
    const response = await axios.get(`${endpoint}/alumnos`);
    setAlumnos(response.data);
  };

  const deleteAlumno = async (id) => {
    await axios.delete(`${endpoint}/alumno/${id}`);
    getAllAlumnos();
  };

  useEffect(() => {
    // Filtrar los resultados basados en el valor de búsqueda
    const resultados = alumnos.filter((alumno) =>
      alumno.dni.toLowerCase().includes(busqueda.toLowerCase()) ||
      alumno.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      alumno.apellido.toLowerCase().includes(busqueda.toLowerCase()) ||
      alumno.correo.toLowerCase().includes(busqueda.toLowerCase()) 
    );
    setResultadosFiltrados(resultados);
  }, [alumnos, busqueda]);

  const handleInputChange = (event) => {
    const valorBusqueda = event.target.value;
    setBusqueda(valorBusqueda);
  };
  return (
    <div className="bg-[#1f252e] inline-block w-full overflow-auto m-[-50]">
      <div className="flex justify-start w-5/6 p-0">
        <Link to="/alumnocreate" className="button  btn-lg mt-2 mb-2 ">
          Create Alumno
        </Link>
      </div>
      <div className="flex lg:justify-between border-b-2 border-fuchsia-900 pb-1">
        <h2 className="text-2xl text-gray-500 font-bold">Todos los Alumnos</h2>
        <div className="text-center flex-auto">
          <input
            type="text"
            name="busca"
            placeholder="Search..."
            className="
            text-slate-400
            bg-[#1f252e]
             w-1/3
             py-2
             border-b-2 border-slate-100
             outline-none
             focus:border-yellow-400
           "
            value={busqueda}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <table className="table table-striped border-separate space-y-6 text-sm m-auto mx-auto">
        <thead className="bg-[#434a5a] text-white">
          <tr className="tra">
            <th className="p-3">ID</th>
            <th className="p-3">DNI</th>
            <th className="p-3 text-left">NOMBRE</th>
            <th className="p-3 text-left">APELLIDO</th>
            <th className="p-3 text-left">CORREO</th>
            <th className="p-3 text-left">FECHA DE NACIMIENTO</th>
            <th className="p-3 text-left">GRUPO</th>
            <th className="p-3 text-left">ACCIÓN</th>
          </tr>
        </thead>
        <tbody>
          {resultadosFiltrados.map((alumno) => (
            <tr
              key={alumno.id}
              className="bg-[#323846] lg:text-white text-center tra"
            >
              <td className="p-1 font-extrabold text-[#01eefe]">{alumno.id}</td>
              <td className="p-1">{alumno.dni}</td>
              <td className="p-1 font-medium capitalize">{alumno.nombre}</td>
              <td className="p-1 font-medium capitalize">{alumno.apellido}</td>
              <td className="p-1">{alumno.correo}</td>
              <td className="p-1">{alumno.fecha_nacimiento}</td>
              <td className="p-1">{alumno.grupo_id}</td>
              <td className="p-1">
                <Link to={`/alumnoedit/${alumno.id}`} className="mr-3">
                  <i className="fa-solid fa-pencil text-green-700" />
                </Link>
                <button
                  className="ml-3"
                  onClick={() => deleteAlumno(alumno.id)}
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

export default ShowAlumnos;
