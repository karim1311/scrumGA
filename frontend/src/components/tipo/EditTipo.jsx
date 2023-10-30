import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/tipo/'

const EditTipo = () => {

    const [descripcion, setDescripcion] = useState('')
    const [porcentaje, setPorsentaje] = useState('')
    const [rango, setRango] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            descripcion: descripcion,
            porcentaje: porcentaje,
            rango: rango
        })
        navigate('/')
    }

    useEffect(() => {

        const getTiposById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setDescripcion(response.data.descripcion)
            setPorsentaje(response.data.porcentaje)
            setRango(response.data.rango)
        }
        getTiposById()

    }, [])
    return (
        <div>
            <h2>Editar Tipo</h2>
            <form onSubmit={update}>
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
                        onChange={(e) => setPorsentaje(e.target.value)}
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
                <button type='submit' className='btn btn-success'>Update</button>
            </form>
        </div>
    )
}

export default EditTipo