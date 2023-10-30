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

    const deleteEvaluaciones = async (id) => {

        await axios.delete(`${endpoint}/evaluacion/${id}`)
        getAllEvaluaciones()

    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/evaluacioncreate" className='btn btn-success btn-lg mt-2 mb-2 text-white py-1 px-2 bg-green-400 rounded-lg'>Crear Evaluación</Link>
            </div>
            <table className='table text-gray-400 border-separate space-y-6 text-sm w-[700px]'>
                <thead className='bg-primary text-black'>
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
                                <Link to={`/evaluacionedit/${evaluaciones.id}`} className='btn btn-info m-2 ml-3 '>✏</Link>
                                <button onClick={() => deleteEvaluaciones(evaluaciones.id)} className='btn btn-danger mr-3'>🗑</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowEvaluaciones