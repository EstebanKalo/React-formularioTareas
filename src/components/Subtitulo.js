import React from 'react';

//autocompletar con rsc 

const Subtitulo = (props) => {
    //aqui va la logica
    return (
        //aqui va el maquetado y un poco de logica
        <h2 className="text-center text-light">Tareas de la comision {props.comision}</h2>
    );
};

export default Subtitulo;