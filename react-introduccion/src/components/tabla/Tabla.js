import React, { Component } from 'react';
import HeadTabla from './HeadTabla';
import BodyTabla from './BodyTabla';


const Tabla = ({ datosPersonas, eliminarPersona }) => {
    return (
        <table className="table">
            <HeadTabla/>
            <BodyTabla datosPersonas={datosPersonas} eliminarPersona={eliminarPersona} />
        </table>
    );
}
export default Tabla;