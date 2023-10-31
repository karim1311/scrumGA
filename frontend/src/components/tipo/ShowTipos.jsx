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

    const deleteTipo = async (id) => {

        await axios.delete(`${endpoint}/tipo/${id}`)
        getAllTipos()

    }
    return (
        <div className="bg-[#1f252e] h-screen flex-col flex justify-center items-center">
            <div className="flex justify-start w-5/6 p-4">
        <Link to="/tipocreate" className="button btn btn-success btn-lg mt-2 mb-2">
          Create Tipo
        </Link>
      </div>
      <table className="table table-striped border-separate space-y-6 text-sm">
                <thead className="bg-[#434a5a] text-white">
                <tr className="trb">
                        <th className='p-3'>DESCRIPCIÓN</th>
                        <th className='p-3'>PORCENTAJE</th>
                        <th className='p-3'>RANGO</th>
                        <th className='p-3'>ACCION</th>
                    </tr>
                </thead>
                <tbody>
                    {tipos.map((tipo) => (
                        <tr key={tipo.id}
                        className="bg-[#323846] lg:text-white text-center trb"
                        >
                            <td className='p-3'>{tipo.descripcion}</td>
                            <td className='p-3'>{tipo.porcentaje}</td>
                            <td className='p-3'>{tipo.rango}</td>
                            <td className='p-3'>
                                <Link to={`/tipoedit/${tipo.id}`} className='mr-3'>
                                <i className="fa-solid fa-pencil text-green-700" /></Link>
                                <button onClick={() => deleteTipo(tipo.id)} className='ml-3'>
                                <i className="fa-solid fa-trash-can text-red-700" /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowTipos