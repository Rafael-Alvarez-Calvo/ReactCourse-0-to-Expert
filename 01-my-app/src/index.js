import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './FirstApp/FirstApp.js';
import CounterApp from './CounterApp/CounterApp.js';
import './index.css';
    
const divRoot = document.querySelector("#root");

ReactDOM.render(

    <>
        <FirstApp saludo="Hola, soy Rafa" numeros={123456} decimales={12345.6789} arrays={[1,2,3,4,5,6]}/>
        <CounterApp value={0}/>
    </>,
    divRoot
    
 );