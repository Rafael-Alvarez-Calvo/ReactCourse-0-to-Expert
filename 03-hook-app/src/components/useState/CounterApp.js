import React, { useState } from 'react'
import "./Counter.css"

export const CounterApp = () => {

    const [State, setState] = useState({
        Counter1: 10,
        Counter2: 20,
        Counter3: 30,
        Counter4: 40
    })

    const {Counter1, Counter2} = State;

    return (
        <>
          <h1>Counter1 {Counter1}</h1>
          <h1>Counter2 {Counter2}</h1>
          <hr />
          <button 
            className="btn btn-primary" 
            onClick={() => {
                setState({
                    ...State,
                    //Hacemos copia de todos los valores que vienen por defecto del state y los introducimos en el nuevo estado, tambien descompongo todo mi state y sustituyo el valor de Counter 1 : 10 por el Counter + 1, 
                    Counter1 : Counter1 + 1,
                });
            }}>+1</button>  
        </>
    )
}
