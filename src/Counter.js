import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


/* Esta funcion espera una variable "numeros" y los muestra en casillas negras,
por lo que se podría llamar Casillas envez de Counter */

function Casillas(propiedades){
    return(
        <div className="col-md-1 rounded m-1 bg-dark border border-info"> {propiedades.numeros} </div>
    )
}

export default Casillas;
