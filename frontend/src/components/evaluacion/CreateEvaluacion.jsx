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
        await axios.post(endpoint, { descripcion: descripcion, tipo_id: tipo_id, fecha: fecha })
        navigate('/')
    }
    return (
        <div className='flex flex-col items-center h-screen'>
            <div className="mt-5 text-amber-50">
                <p className="text-xl mb-4">Registrar Evaluación </p>
                <p className="max-w-screen-sm h-14 text-sm p-2 rounded">
                    Bienvenido
                    <br />
                    Selecciona la accion que quieras realizar en las pestañas del menu de
                    la izquierda
                </p>
            </div>
            <div className="edit mt-4">
                <h2 className="text-center font-bold text-2xl font-roboto mb-4">
                    Registrar Evaluación
                </h2>
                <form onSubmit={store} className="flex-col flex items-center form_edit">
                    <div className='mb-3 block'>
                        <label className='form-label'>
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Descripción</span>
                        </label>
                        <input
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            type='text'
                            placeholder='Descripción'
                            className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Tipo ID              
                            </span>
                        </label>
                        <input
                            value={tipo_id}
                            onChange={(e) => setTipoId(e.target.value)}
                            type='text'
                            placeholder='Tipo ID'
                            className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
                        />
                    </div>

                    <div className='mb-3 block'>
                        <label className='form-label'>
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Fecha de evaluación              
                            </span>
                        </label>
                        <input
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            type='text'
                            placeholder='Fecha de Evaluación'
                            className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
                        />
                    </div>
                    <button type='submit' className='button mt-4'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default CreateEvaluacion