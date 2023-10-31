import React from 'react';
import { useState } from 'react'
import axios from 'axios'

function Home() {
  const [alumnos, setAlumnos] = useState([])
    
  async function conectarBackend(){
    const response = await fetch("http://localhost:8000/api/alumnos");
    const data = await response.json();
    setAlumnos(data);
    console.log(data);
  }
  
  async function enviarDatos(){
    try{
      const body = {};

      const inputAlumno = Array.from(document.getElementsByClassName('input-alumno'));
      inputAlumno.forEach((e)=>{
        body[e.name] = e.value;
      })

      const response = await axios.post("http://localhost:8000/api/alumno", body);
      console.log("respuesta del server", response.data);

    }catch (error){
      console.error("Hay un error", error);
    }
  }

  return (
    <div className='pt-20 text-amber-50'>
      <h2 className='font-bold text-2xl'>Página de inicio</h2>
      <p className='pt-5'>Bienvenido a la página de inicio de mi aplicación.</p>
      
      {/* <h1>Academia</h1>
      <button onClick={conectarBackend}>Mostrar lista</button>
      {alumnos.map((el, key)=>{
        return <h2 key={key}>{el.nombre} </h2>
      })}<br/>
      DNI:
      <input type="text" name='dni' className='input-alumno'/>
      nombre:
      <input type="text" name='nombre' className='input-alumno'/>
      apellido:
      <input type="text" name='apellido' className='input-alumno'/>
      correo:
      <input type="email" name='correo' className='input-alumno'/>
      fecha nacimiento:
      <input type="date" name='fecha_nacimiento' className='input-alumno'/>
      Grupo id:
      <select name="grupo_id" id="" className='input-alumno'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <input type="text" name='grupo_id' className='input-alumno'/>
      <button onClick={enviarDatos}>Guardar</button><br /><br /> */}

    </div>
  );
}

export default Home;
