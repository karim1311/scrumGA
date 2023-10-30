import React, { useEffect, useState } from 'react'
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
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Descripción</th>
                        <th>Porcentaje</th>
                        <th>Rango</th>
                    </tr>
                </thead>
                <tbody>
                    {tipos.map((tipos) => (
                        <tr key={tipos.id}>
                            <td>{tipos.descripcion}</td>
                            <td>{tipos.porcentaje}</td>
                            <td>{tipos.rango}</td>
                            <td>
                                <Link to={`/tiposedit/${tipos.id}`} className='btn btn-info'>Edit</Link>
                                <button onClick={() => deleteTipos(tipos.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowTipos