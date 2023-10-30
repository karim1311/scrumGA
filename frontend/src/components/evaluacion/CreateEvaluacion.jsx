import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/evaluacion'
const CreateEvaluacion = () => {

    const [descripcion, setDescripcion] = useState('')
    const [tipo_id, setTipoId] = useState('')
    const [fecha, setFecha] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, { descripcion: descripcion, tipo_id: tipo_id, fecha: fecha})
        navigate('/')
    }
    return (
        <div>
            <h2>Crear Evaluación</h2>
            <form onSubmit={store}>
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
                    <label className='form-label'>Tipo ID</label>
                    <input
                        value={tipo_id}
                        onChange={(e) => setTipoId(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Fecha de evaluación</label>
                    <input
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-success'>Save</button>
            </form>
        </div>
    )
}

export default CreateEvaluacion