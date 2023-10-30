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

        await axios.delete(`${endpoint}/evaluaciones/${id}`)
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
                    {evaluaciones.map((evaluaciones) => (
                        <tr key={evaluaciones.id}>
                            <td>{evaluaciones.descripcion}</td>
                            <td>{evaluaciones.tipo_id}</td>
                            <td>
                                <Link to={`/employeeedit/${evaluaciones.id}`} className='btn btn-info'>Edit</Link>
                                <button onClick={() => deleteEvaluaciones(evaluaciones.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowEvaluaciones