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
        <div className="bg-[#1f252e] h-screen flex-col flex justify-center items-center">
            <div className='flex justify-start w-5/6 p-4'>
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Descripción</th>
                        <th>Tipo</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {evaluaciones.map((evaluacion) => (
                        <tr key={evaluacion.id}>
                            <td>{evaluacion.descripcion}</td>
                            <td>{evaluacion.tipo_id}</td>
                            <td>{evaluacion.fecha}</td>
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