import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  
  return (

    <Router>      
    <div className="d-flex">
      <nav  className="flex-1 bg-blue-700 h-screen" >
        <div className='text-white pb-15 text-2xl text-center pt-10'>
          <h2>Admin</h2>
          <p>[name Admin]</p>
         
        </div>
      
        <ul className='pl-5 pt-40'>
          <li className='pb-5'>
            <Link to="/" className='text-white pb-15 text-2xl'><span className='m-3 mr-16'>Inico</span>
            <i class="fa-solid fa-chalkboard-user"/></Link>
            
          </li>
          <li className='pb-5'>
            <Link to="/About/1" className='text-white text-2xl'><span className='m-3'>Lista de Alumnos</span>
            <i class="fa-solid fa-graduation-cap"/></Link> 
          </li>
          <li className='pb-5'>
            <Link to="/Contact/2" className='text-white text-2xl'><span className='m-3'>Registro  Alumno</span>
            <i className="fa-solid fa-chalkboard"/></Link>
          </li>
        </ul>
      </nav>
      
      <div className="flex-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About/:id" element={<About />} />
          <Route path="/Contact/:id" element={<Contact />} />
        </Routes>
      </div>
    </div>
  </Router>
  )
}

export default App


/*
import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [pedidos, setPedidos] = useState([])
  
  async function conectarBackend(){
    const response = await fetch("http://localhost:8000/api/pedidos");
    const data = await response.json();
    setPedidos(data);
    console.log(data);
  }
  async function enviarDatos(){
    try{
      const body = {};

      const inputPedido = Array.from(document.getElementsByClassName('input-cliente'));
      inputPedido.forEach((e)=>{
        body[e.name] = e.value;
      })

      const response = await axios.post("http://localhost:8000/api/pedidos", body);
      console.log("respuesta del server", response.data);

    }catch (error){
      console.error("Hay un error", error);
    }
  }
  return (
    <>
      <h1>Restaurante</h1>
      <button onClick={conectarBackend}>Conectar API</button>
      {pedidos.map((el, key)=>{
        return <h2 key={key}>{el.nombre}</h2>
      })}<br/>
      cliente ID:
      <input type="text" name='clienteId' className='input-cliente'/>
      Plato ID:
      <input type="text" name='platoId' className='input-cliente'/>
      cantidad:
      <input type="text" name='cantidad' className='input-cliente'/>
      subtotal:
      <input type="text" name='subtotal' className='input-cliente'/>
      <button onClick={enviarDatos}>Guardar</button>
    </>
  )
}

export default App






*/