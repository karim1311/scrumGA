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
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-black'>Create</Link>
            </div>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>dni</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Fecha Nacimiento</th>
                        <th>Grupo Id</th>
                        <th>Action</th>
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
                                <Link to={`/alumnoedit/${alumno.id}`} className='btn btn-info'>Editar</Link>
                                <button onClick={() => deleteAlumno(alumno.id)} className='btn btn-danger'>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowAlumnos