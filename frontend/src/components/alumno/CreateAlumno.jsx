import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/alumno'
const CreateAlumno = () => {

    const [dni, setDni] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [fecha_nacimiento, setAfechaNacimiento] = useState('')
    const [grupo_id, setGrupoId] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, { dni: dni, nombre: nombre, apellido: apellido, correo: correo, fecha_nacimiento: fecha_nacimiento, grupo_id: grupo_id })
        navigate('/')

    }
    return (
        <div>
            <h2>Crear Alumno</h2>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>DNI</label>
                    <input
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Apellido</label>
                    <input
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Correo</label>
                    <input
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Fecha Nacimiento</label>
                    <input
                        value={fecha_nacimiento}
                        onChange={(e) => setAfechaNacimiento(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Grupo ID</label>
                    <input
                        value={grupo_id}
                        onChange={(e) => setGrupoId(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <button type='submit' className='btn btn-success'>Guardar</button>
            </form>
        </div>
    )
}

export default CreateAlumno