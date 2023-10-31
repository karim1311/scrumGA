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
        <div className="bg-[#1f252e] h-screen flex-col flex justify-center items-center">
      <div className='d-grid gap-2'>
                <Link to="/calificacioncreate" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Alumno Id</th>
                        <th>Evaluación Id</th>
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
                                <Link to={`/editcalificacion/${calificacion.id}`} className='btn btn-info'>Edit</Link>
                                <button onClick={() => deleteCalicacion(calificacion.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowCalificaciones