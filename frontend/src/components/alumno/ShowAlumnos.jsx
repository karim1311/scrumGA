import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const ShowAlumnos = () => {

    const [alumnos, setAlumnos] = useState([])
    useEffect(() => {
        getAllAlumnos()
    }, [])

    const getAllAlumnos = async () => {
        const response = await axios.get(`${endpoint}/alumnos`)
        setAlumnos(response.data)
    }

    const deleteAlumno = async (id) => {

        await axios.delete(`${endpoint}/alumno/${id}`)
        getAllAlumnos()

    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/alumnocreate" className='btn btn-success btn-lg mt-2 mb-2 bg-[#04b2bf] py-1 px-2 text-white rounded-lg'>Crear Alumno</Link>
            </div>
            <table className="table text-gray-400 border-separate space-y-6 text-sm w-[700px]">                <thead className='bg-primary text-white'>
                    <tr>
                        <th>DNI</th>
                        <th>NOMBRE</th>
                        <th>APELLIDO</th>
                        <th>CORREO</th>
                        <th>FECHA NAC.</th>
                        <th>GRUPO</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnos.map((alumno) => (
                        <tr key={alumno.id}>
                            <td>{alumno.dni}</td>
                            <td>{alumno.nombre}</td>
                            <td>{alumno.apellido}</td>
                            <td>{alumno.correo}</td>
                            <td>{alumno.fecha_nacimiento}</td>
                            <td>{alumno.grupo_id}</td>
                            <td>
                                <Link to={`/alumnoedit/${alumno.id}`} className='btn btn-info mr-3'>✏</Link>
                                <button onClick={() => deleteAlumno(alumno.id)} className='btn btn-danger ml-3'>🗑</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowAlumnos