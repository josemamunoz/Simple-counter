import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//Asignamos una variable contador, para inciar el tiempo cero
var contador = 0;

//Establecemos los 6 numeros en cero 
var numero1 = 0;
var numero2 = 0;
var numero3 = 0;
var numero4 = 0;
var numero5 = 0;
var numero6 = 0;


//con setInterval aplicará una función cada 1000 milisegundos = 1 segundo
setInterval(() => {
  /* 
  Se asigna a cada numero el contador que va aumentando cada 1 segundo,
  para que nos devuelva solo valores enteros aplicamos Math.floor
  con el operador residuo "%" y 10 nos muestra solo las unidades  
   */ 
  numero6 = (Math.floor((contador/100000)))%10;
  numero5 = (Math.floor((contador/10000)))%10;
  numero4 = (Math.floor((contador/1000)))%10;
  numero3 = (Math.floor((contador/100)))%10;
  numero2 = (Math.floor((contador/10)))%10;
  numero1 = (Math.floor(contador))%10;
  
  // console.log(numero2, numero1); //para comprobar que está haciendo
  //con contador++ la función hará que cada segundo se sume 1 al contador
  contador++;

  // con esto mostramos los valores en el html
  ReactDOM.render(
    <React.StrictMode>
      <App num1={numero1} num2={numero2} num3={numero3} num4={numero4} num5={numero5} num6={numero6}/>
    </React.StrictMode>,
    document.getElementById('root')
  );

}, 1000);