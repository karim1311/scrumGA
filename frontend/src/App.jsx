import { useState } from 'react';
import './App.css'

function App() {
const [count, setCount] = useState(0)

async function conectarBackend() {
  const response = await fetch("http://localhost:8000/api/alumnos");
  const alumnos = await response.json();
  console.log(alumnos);
}

  return (
    <>
      <div>
        <button onClick={conectarBackend}>mostrar alumnos</button>
      </div>
    </>
  )
}

export default App
