import React from 'react';


export default function RegistroCali() {
  return (
    <div class="flex flex-col justify-center items-center">
      <div class="mt-20">
        <p class="text-xl mb-4">Registra una nueva nota</p>
        <p class="max-w-screen-sm h-14 text-sm p-2 rounded">
          Bienvenido
          <br />
          Selecciona la accion que quieras realizar en las pestañas del menu de
          la izquierda
        </p>
      </div>
      <div class=" w-[50%] bg-slate-200  rounded-lg mt-9">
        <h2 class="text-center fong-bold text-2xl">Añadir Calificación</h2>
        <form
          action="#"
          method="post"
          class="flex-col flex items-center"
        >
          <label class="block">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Nombre alumno
            </span>
            <input
              type="text"
              name="alumno_id"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Nombres"
            />
          </label>
          <label class="block">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Tipo de evaluación
            </span>
            <input
              type="text"
              name="evaluacion_id"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Evaluación"
            />
          </label>
          <label class="block">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Calificación
            </span>
            <input
              type="number"
              min="0"
              max="10"
              name="nota"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder='Nota'
            />
          </label>

          <label class="block">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Mensaje
            </span>
            <textarea name="mensaje" cols="25" rows="5" 
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder='Escribe tu observación'/>
          </label>

          <button
            type="submit"
            class=" mt-10 bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  )
}
