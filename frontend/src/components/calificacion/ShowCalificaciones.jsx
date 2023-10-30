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

        await axios.delete(`${endpoint}/calificaciones/${id}`)
        getAllCalificaciones()

    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Alumno Id</th>
                        <th>Evaluación Id</th>
                    </tr>
                </thead>
                <tbody>
                    {calificaciones.map((calificaciones) => (
                        <tr key={calificaciones.id}>
                            <td>{calificaciones.alumno_id}</td>
                            <td>{calificaciones.evaluacion_id}</td>
                            <td>{calificaciones.nota}</td>
                            <td>{calificaciones.mensaje}</td>
                            <td>
                                <Link to={`/calificacionedit/${calificaciones.id}`} className='btn btn-info'>Edit</Link>
                                <button onClick={() => deleteCalicacion(calificaciones.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowCalificaciones