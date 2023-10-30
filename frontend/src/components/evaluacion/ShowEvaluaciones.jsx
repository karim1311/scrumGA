import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const ShowEvaluaciones = () => {

    const [evaluaciones, setEvaluaciones] = useState([])
    useEffect(() => {
        getAllEvaluaciones()
    }, [])

    const getAllEvaluaciones = async () => {
        const response = await axios.get(`${endpoint}/evaluaciones`)
        setEvaluaciones(response.data)
    }

    const deleteEvaluacion = async (id) => {

        await axios.delete(`${endpoint}/evaluacion/${id}`)
        getAllEvaluaciones()

    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Descripción</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {evaluaciones.map((evaluacion) => (
                        <tr key={evaluacion.id}>
                            <td>{evaluacion.descripcion}</td>
                            <td>{evaluacion.tipo_id}</td>
                            <td>
                                <Link to={`/evaluacionedit/${evaluacion.id}`} className='btn btn-info'>Edit</Link>
                                <button onClick={() => deleteEvaluacion(evaluacion.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowEvaluaciones