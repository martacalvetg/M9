import { useState, useEffect } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabla from './components/tabla/Tabla';
import Form from './components/Form';

const App = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        
        const personasApi = data.map(persona => {
          return {
            nombre: persona.name,
            apellido: persona.username, 
            ...persona 
          }
        });
        
        setPersonas(personasApi); 
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    }
    obtenerDatos(); 
  }, []);

  const eliminarPersona = (indice) => {
    setPersonas(personas.filter((persona, i) => i !== indice));
  }

  const enviarFormulario = (persona) => {
    setPersonas([...personas, persona]); 
  }

  return (
    <div className="container">
      <h1>Tutorial de React</h1>
      <Tabla datosPersonas={personas} eliminarPersona={eliminarPersona} /> 
      <Form enviarFormulario={enviarFormulario} />
    </div>
  );
}

export default App;
