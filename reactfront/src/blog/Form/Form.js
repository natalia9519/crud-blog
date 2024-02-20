import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Form.css'

const Form = () => {
    const [recetaEnviada, setRecetaEnviada] = useState(false);
    const [terminosAceptados, setTerminosAceptados] = useState(false);

    const handleEnviarReceta = (e) => {
        e.preventDefault();
        if (terminosAceptados) {
            setRecetaEnviada(true);
        } else {
            alert("Debes aceptar los términos y condiciones de privacidad");
        }
    }


    const handleTerminosAceptados = () => {
        setTerminosAceptados(!terminosAceptados);
    }

    return (
        <main>
            <h2 className="form-h2">Comparte tu receta con nosotros</h2>
            {!recetaEnviada ? (
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="tittles">Nombre</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Introduce tu nombre" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2" className="tittles">Receta</label>
                        <textarea type="textarea" className="form-control" id="formGroupExampleInput2" placeholder="Introduce tu receta" />
                    </div>
                    <div>
                        <input className="form-check-input" type="checkbox" checked={terminosAceptados} onChange={handleTerminosAceptados} />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Acepto los términos y condiciones de privacidad.
                        </label>
                    </div>

                    <button onClick={handleEnviarReceta} className="btn-form">Enviar receta</button>
                </form>
            ) : (
                <div>
                    <p className="tittles">Receta recibida</p>
                    <Link to="/" className="btn-form">Volver a inicio</Link>
                </div>
            )}
        </main>

    )
}
export default Form