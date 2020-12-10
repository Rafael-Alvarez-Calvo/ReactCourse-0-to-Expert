import React, {useState,useEffect} from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name : "",
        email : "",
    })

    const {name, email} = formState;

    //Ejecuta su interior una sola vez al tener las dependencias vacias
    useEffect(() =>{
        // console.log("Hey!");
    }, [])

    //Ejecuta o detecta que ha cambiado el efecto cuando cambia el estado del formstate
    useEffect(() =>{
        // console.log("Formstate cambio");
    }, [formState])

    //Detecta cambio cuando cambia el estado del email
    useEffect(() =>{
        // console.log("Email cambio");
    }, [email])

    const handleInputChange = ({target}) =>{
        // console.log(target.name)
        // console.log(target.value)
        setFormState({
            ...formState,
            [target.name] : target.value, 
            [target.email] : target.value, 

        })
    }
    
    return (
        <>
          <h1>Use Effect</h1>
          <hr />
          <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name here"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}/>   
          </div>
          <br />  
          <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="example@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}/>   
          </div>

          {(name === "123") && <Message />}  
        </>
    )
}
