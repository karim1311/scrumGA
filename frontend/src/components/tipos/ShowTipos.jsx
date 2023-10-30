import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const ShowTipos = () => {

    const [tipos, setTipos] = useState([])
    useEffect(() => {
        getAllTipos()
    }, [])

    const getAllTipos = async () => {
        const response = await axios.get(`${endpoint}/tipos`)
        setTipos(response.data)
    }

    const deleteTipos = async (id) => {

        await axios.delete(`${endpoint}/tipos/${id}`)
        getAllTipos()

    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/tipocreate" className='btn btn-success btn-lg mt-2 mb-2 text-white py-1 px-2 bg-green-400 rounded-lg'>Crear Tipo</Link>
            </div>
            <table className='table text-gray-400 border-separate space-y-6 text-sm w-[700px]'>
                <thead className='bg-primary text-black'>
                    <tr>
                        <th>Descripción</th>
                        <th>Porcentaje</th>
                        <th>Rango</th>
                    </tr>
                </thead>
                <tbody>
                    {tipos.map((tipo) => (
                        <tr key={tipo.id}>
                            <td>{tipo.descripcion}</td>
                            <td>{tipo.porcentaje}</td>
                            <td>{tipo.rango}</td>
                            <td>
                                <Link to={`/tipoedit/${tipos.id}`} className='btn btn-info'>✏</Link>
                                <button onClick={() => deleteTipos(tipos.id)} className='btn btn-danger'>🗑</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowTipos