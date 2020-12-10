import React from 'react'
import { useCounter } from './Hooks/useCounter'
import './Counter.css'

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter();
    return (
        <>
          <h1>Counter with hook : {state}</h1>
          
          <button className="btn" onClick={() => decrement(2)}>-1</button>

          <button className="btn" onClick={reset}>Reset</button>

          <button className="btn" onClick={() => increment(2)}>+1</button>  
        </>
    )
}
