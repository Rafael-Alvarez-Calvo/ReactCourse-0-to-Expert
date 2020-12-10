import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { useFetch } from '../../Hooks/useFetch'
import './examples.css'

export const MultipleCustomHooks = () => {
    
    
    const {counter, increment, decrement, reset} = useCounter(1)
    
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    console.log(counter);
    // console.log(loading);

    const {author,quote} = !!data && data[0];
    //Si existe la data extrae la posicion 0 de la data

    // const { quote, author } = !loading && data[0]; //Otra manera de evaluar esta condicion

    //console.log(null) = retorna null
    //console.log(!null) = retorna true
    //console.log(!!null) = retorna false
    
    
    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {/*Condicion ternaria */}
            {loading 

                ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                ) : (

                    <blockquote className="blockquote text-center">
        
                        <p>{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                        
                    </blockquote>

                )
            }

            {/*Condicional normal*/}
            {/* {loading && <div className="alert alert-info text">Loading...</div>}
            
            {!loading && (
            <blockquote className="blockquote text-right">
                <p className="mb-0">Hello World!</p>
                <footer className="blockquote-footer">Equiman</footer>
            </blockquote>
            )} */}
            <div className="containerBtn">

                <button 
                    className="btn btn-primary"
                    onClick={() => counter > 1 ? decrement(1) : reset}>
                    Quote anterior
                </button>
                <button 
                    className="btn btn-primary"
                    onClick={reset}>
                    Empezar de nuevo
                </button>
                <button 
                    className="btn btn-primary"
                    onClick={() => counter >= 30 ? reset : increment(1)
                        
                    }>Siguiente Quote
                </button>

            </div>

        </div>
    )
}
