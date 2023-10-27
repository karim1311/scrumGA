import React from "react";

function Contact() {
  return (
    <div class="flex flex-col justify-center items-center">
      <div class="mt-20">
        <p class="text-xl mb-4">Registra un alumno nuevo</p>
        <p class="max-w-screen-sm h-14 text-sm p-2 rounded">
          Bienvenido
          <br />
          Selecciona la accion que quieras realizar en las pestañas del menu de
          la izquierda
        </p>
      </div>
      <div class="w-[50%] bg-blue-200  rounded-lg mt-9">
        <h2 class="text-center fong-bold text-2xl">Añadir alumno</h2>
        <form
          action="/src/models/Create_Edit/CrearAlumno.php"
          method="post"
          class="flex-col flex items-center"
        >
          <label class="block">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              DNI
            </span>
            <input
              type="text"
              name="dni"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Identificación"
            />
          </label>
          <label class="block">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Nombre
            </span>
            <input
              type="text"
              name="nombre"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Nombres"
            />
          </label>
          <label class="block">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Apellido
            </span>
            <input
              type="text"
              name="apellido"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="apellidos"
            />
          </label>
          <label class="block">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Fecha de Nacimiento
            </span>
            <input
              type="date"
              name="fecha"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </label>
          <button
            type="submit"
            class=" mt-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;