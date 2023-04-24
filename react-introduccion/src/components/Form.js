import { useState } from 'react';

const Form = ({ enviarFormulario }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (nombre && apellido) {
            const nuevaPersona = { nombre, apellido };
            enviarFormulario(nuevaPersona);
            setNombre('');
            setApellido('');
        }
    }

    return (
        <>
            <br />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" placeholder="Nombre" className="form-control" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Apellido" className="form-control" value={apellido} onChange={(event) => setApellido(event.target.value)}/>
                </div>
                <button className="btn btn-success" type="submit">Agregar</button>
            </form>
        </>
    );
}

export default Form;