import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";
const ShowAlumnos = () => {
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
  return (
    <div className="bg-[#1f252e] h-screen flex-col flex justify-center items-center">
      <div className="flex justify-start w-5/6 p-4">
        <Link to="/alumnocreate" className="button  btn-lg mt-2 mb-2">
          Create Alumno
        </Link>
      </div>
      <table className="table table-striped border-separate space-y-6 text-sm">
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
          {alumnos.map((alumno) => (
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
