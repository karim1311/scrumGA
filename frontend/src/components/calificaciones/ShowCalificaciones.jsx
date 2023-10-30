import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const ShowCalificaciones = () => {

    const [calificaciones, setCalificaciones] = useState([])
    useEffect(() => {
        getAllCalificaciones()
    }, [])

    const getAllCalificaciones = async () => {
        const response = await axios.get(`${endpoint}/calificaciones`)
        setCalificaciones(response.data)
    }

    const deleteCalicacion = async (id) => {

        await axios.delete(`${endpoint}/calificacion/${id}`)
        getAllCalificaciones()

    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/calificacioncreate" className='btn btn-success btn-lg mt-2 mb-2 text-white py-1 px-2 bg-green-400 rounded-lg'>Crear Calificación</Link>
            </div>
            <table className='table text-gray-400 border-separate space-y-6 text-sm w-[700px]'>
                <thead className='bg-primary text-black'>
                    <tr>
                        <th>Alumno</th>
                        <th>Evaluación</th>
                        <th>NOTA</th>
                        <th>MENSAJE</th>
                    </tr>
                </thead>
                <tbody>
                    {calificaciones.map((calificacion) => (
                        <tr key={calificacion.id}>
                            <td>{calificacion.alumno_id}</td>
                            <td>{calificacion.evaluacion_id}</td>
                            <td>{calificacion.nota}</td>
                            <td>{calificacion.mensaje}</td>
                            <td>
                                <Link to={`/calificacionedit/${calificacion.id}`} className='btn btn-info ml-3 mr-3'>✏</Link>
                                <button onClick={() => deleteCalicacion(calificacion.id)} className='btn btn-danger m-1'>🗑</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowCalificaciones