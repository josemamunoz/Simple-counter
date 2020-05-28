import React from 'react';
import './App.css';
import Casillas from './Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'


/* Creamos una funcion que reciba 6 num  */

function App({num1, num2, num3, num4, num5, num6}) {

  const relojIcono = <FontAwesomeIcon icon={faClock} />
  return (
    <div className="App">
        <div className="row">
          <div className="col-md-1 px-4"> {relojIcono} </div>
          <Casillas numeros={num6}/>
          <Casillas numeros={num5}/>
          <Casillas numeros={num4}/>
          <Casillas numeros={num3}/>
          <Casillas numeros={num2}/>
          <Casillas numeros={num1}/>
        </div>
    </div>
  );
}

export default App;
