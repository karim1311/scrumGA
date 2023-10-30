import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/evaluacion/'

const EditEvaluacion = () => {

    const [descripcion, setDescripcion] = useState('')
    const [tipo_id, setTipoId] = useState('')
    const [fecha, setFecha] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            descripcion: descripcion,
            tipo_id: tipo_id, 
            fecha: fecha
        })
        navigate('/')
    }

    useEffect(() => {

        const getEvaluacionById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            console.log(response);
            setDescripcion(response.data.descripcion)
            setTipoId(response.data.tipo_id)
            setFecha(response.data.fecha)
        }
        getEvaluacionById()

    }, [])
    return (
        <div>
            <h2>Editar Evaluacion</h2>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Descripcion</label>
                    <input
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Tipo</label>
                    <input
                        value={tipo_id}
                        onChange={(e) => setTipoId(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Fecha</label>
                    <input
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-success'>Update</button>
            </form>
        </div>
    )
}

export default EditEvaluacion