import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/tipo'
const CreateTipo = () => {

        const [descripcion, setDescripcion] = useState('')
        const [porcentaje, setPorcentaje] = useState('')
        const [rango, setRango] = useState('')
        const navigate = useNavigate()

        const store = async (e) => {
            e.preventDefault();
            await axios.post(endpoint, { descripcion: descripcion, porcentaje: porcentaje, rango: rango})
            navigate('/')
        }

        return (
            <div>
                <h2>Crear un nuevo Tipo</h2>
                <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>Descripción</label>
                        <input
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Porcentaje</label>
                        <input
                            value={porcentaje}
                            onChange={(e) => setPorcentaje(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Rango</label>
                        <input
                            value={rango}
                            onChange={(e) => setRango(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <button type='submit' className='btn btn-success'>Save</button>
                </form>
            </div>
        )
    }

export default CreateTipo
