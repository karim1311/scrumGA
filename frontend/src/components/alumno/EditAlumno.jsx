import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/alumno/'

const EditAlumno = () => {

    const [dni, setDni] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [fecha_nacimiento, setFechaNacimiento] = useState('')
    const [grupo_id, setGrupoId] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            dni: dni,
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            fecha_nacimiento: fecha_nacimiento,
            grupo_id: grupo_id
        })
        navigate('/')
    }

    useEffect(() => {

        const getAlumnoById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setDni(response.data.dni)
            setNombre(response.data.nombre)
            setApellido(response.data.apellido)
            setCorreo(response.data.correo)
            setFechaNacimiento(response.data.fecha_nacimiento)
            setGrupoId(response.data.grupo_id)
        }
        getAlumnoById()

    }, [])
    return (
        <div>
            <h2>Edit Alumno</h2>
            <form onSubmit={update}>
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
                        onChange={(e) => setFechaNacimiento(e.target.value)}
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

                <button type='submit' className='btn btn-success'>Actualizar</button>
            </form>
        </div>
    )
}

export default EditAlumno