import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api/calificaciones/";

const EditCalificaciones = () => {
    const [alumno_id, setAlumnoId] = useState("");
    const [evaluacion_id, setEvaluacionId] = useState("");
    const [nota, setNota] = useState("");
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            alumno_id: alumno_id,
            evaluacion_id: evaluacion_id,
            nota: nota,
            mensaje: mensaje,
        });
        navigate("/");
    };

    useEffect(() => {
        const getCalificacionById = async () => {
            const response = await axios.get(`${endpoint}${id}`);
            setAlumnoId(response.data.alumno_id);
            setEvaluacionId(response.data.evaluacion_id);
            setNota(response.data.nota);
            setMensaje(response.data.mensaje);
        };
        getCalificacionById();
    }, []);

    return (
        <div>
            <h2>Editar Calificación</h2>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Alumno</label>
                    <input
                        value={alumno_id}
                        onChange={(e) => setAlumnoId(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Evaluacion</label>
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
                    Update
                </button>
            </form>
        </div>
    );
};

export default EditCalificaciones;
