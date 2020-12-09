import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    
    const [InputValue, setInputValue] = useState("")
    //Sino introducimos en useState un valor por defecto y lo dejamos vacio, saldra un error ya que el valor que estamos dejando por defecto es undefined y eso muestra error de input incontrolable

    const handleInputChange = (e) =>{
        // console.log(e.target.value)
        setInputValue(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();

        if(InputValue.trim().length > 2){

            setCategories(() => [InputValue.trim()]);
            // setCategories(cats => [InputValue, ...cats]);
            setInputValue("");

        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={InputValue}
                placeholder="Buscar Gif..."
                onChange={handleInputChange}
                />
            {/* <h1 className="valueInput">{InputValue}</h1> */}
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
