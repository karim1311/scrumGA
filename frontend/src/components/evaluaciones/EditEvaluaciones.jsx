import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/evaluaciones/'

const EditEvaluaciones = () => {

    const [descripcion, setDescripcion] = useState('')
    const [tipo_id, setTipoId] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            descripcion: descripcion,
            tipo_id: tipo_id,
        })
        navigate('/')
    }

    useEffect(() => {

        const getEvaluacionesById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setDescripcion(response.data.descripcion)
            setTipoId(response.data.tipo_id)
        }
        getEvaluacionesById()

    }, [])
    return (
        <div>
            <h2>Editar Evaluaciones</h2>
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
                <button type='submit' className='btn btn-success'>Update</button>
            </form>
        </div>
    )
}

export default EditEvaluaciones