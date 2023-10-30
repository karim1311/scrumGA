import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api/calificaciones";

const CreateCalificaciones = () => {
    const [alumno_id, setAlumnoId] = useState("");
    const [evaluacion_id, setEvaluacionId] = useState("");
    const [nota, setNota] = useState("");
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {
            alumno_id: alumno_id,
            evaluacion_id: evaluacion_id,
            nota: nota,
            mensaje: mensaje,
        });
        navigate("/");
    };
    
    return (
        <div>
            <h2>Crear nueva Calificación</h2>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Alumno Id</label>
                    <input
                        value={alumno_id}
                        onChange={(e) => setAlumnoId(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Evaluacion Id</label>
                    <input
                        value={evaluacion_id}
                        onChange={(e) => setEvaluacionId(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Nota</label>
                    <input
                        value={nota}
                        onChange={(e) => setNota(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Mensaje</label>
                    <input
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Save
                </button>
            </form>
        </div>
    );
};

export default CreateCalificaciones;
