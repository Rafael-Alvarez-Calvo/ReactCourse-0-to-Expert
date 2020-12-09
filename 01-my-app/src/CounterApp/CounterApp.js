import React, {useState} from 'react'
import '../CounterApp/CounterApp.css'
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {

    // const [nombre, setNombre] = useState('Goku');
    // console.log(nombre,setNombre);
    const [counterProps, SetCounterProps] = useState(value)
    const [counter, setCounter] = useState(0);

    
    
    const handleSubstract = e =>{
        setCounter(counter - 1);
        SetCounterProps(counterProps - 10)
        //setCounter(() => value + 1); //Puedo manejar el setCounter con una funcion interna qu recibe un evento
        // console.log(e);
    }
    const handleReset = e =>{
        setCounter(value);
        SetCounterProps(value)
        //setCounter(() => value + 1); //Puedo manejar el setCounter con una funcion interna qu recibe un evento
        // console.log(e);
    }
    const handleAdd = e =>{
        setCounter(counter + 1);
        SetCounterProps(counterProps + 10)
        //setCounter(() => value + 1); //Puedo manejar el setCounter con una funcion interna qu recibe un evento
        // console.log(e);
    }

    return (
        <section>
           <h1>CounterApp</h1>
            <h2>Valor estático: {value} </h2> 
            <h2>Valor dinámico props: {counterProps} </h2> 
            <h2>Valor dinámico desde el componente { counter } </h2> 
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleAdd}>+1</button>

            {/* <button onClick={handleAdd()}>Incrementar</button> Los parentesis despues de declarar la funcion llaman directamente a la funcion, antes de hacer click y no despues */}

            {/* <button onClick={e => {handleAdd(e)}}>Click aqui para incrementar</button> Esto es la forma larga de declarar esta funcion*/}
        </section>
    )
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}

export default CounterApp




