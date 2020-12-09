import React from 'react';
import '../FirstApp/FirstApp.css';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';

const FirstApp = ({saludo, numeros, decimales,arrays, subtitulo}) =>{ //Desestructuro las props en los argumentos de la funcion, para evitar llamar a props por props.valor

    return (
        // <div> {/*De esta manera se creara un div contenedor de nuestro coontenido*/}
        //     <h1>Hola Mundo</h1>
        //     <p>Mi primera aplicacion</p>
        // </div>

        <section> {/*De esta manera se crearan los elementos sin un contenedor y react detectara que es un fragment sin necesidad de importar fragment arriba*/}
            <h1>{saludo}</h1>
            <ol>React imprime estos valores:
                <li>Strings -- {saludo}</li>
                <li>Numeros -- {numeros}</li>
                <li>Decimales -- {decimales}</li>
                <li>Arrays -- {arrays}</li>
            </ol>
            <p>{subtitulo}</p>
        </section>
        // <> {/*De esta manera se crearan los elementos sin un contenedor y react detectara que es un fragment sin necesidad de importar fragment arriba*/}
        //     <h1>{saludo}</h1>
        //     <ol>React imprime estos valores:
        //         <li>Strings -- {saludo}</li>
        //         <li>Numeros -- {numeros}</li>
        //         <li>Decimales -- {decimales}</li>
        //         <li>Arrays -- {arrays}</li>
        //     </ol>
        //     <p>{subtitulo}</p>
        // </>

        // <Fragment> {/*Fragment evita tener que componer le jsx en un contenedor*/}
        //     <h1>Hola Mundo</h1>
        //     <p>Mi primera aplicacion</p>
        // </Fragment>
    );
}
// const FirstApp = (props) =>{

//     const saludo = "Hola chulo"
//     const numeros = 12345
//     const decimales = 12345.156
//     const arrays = [1,2,3,4,5,6,7]

//     const objeto = {
//         Nombre : "Rafael",
//         Edad : 27
//     }

//     const {Nombre, Edad} = objeto;

//     return (
//         // <div> {/*De esta manera se creara un div contenedor de nuestro coontenido*/}
//         //     <h1>Hola Mundo</h1>
//         //     <p>Mi primera aplicacion</p>
//         // </div>

//         <> {/*De esta manera se crearan los elementos sin un contenedor y react detectara que es un fragment sin necesidad de importar fragment arriba*/}
//             <h1>{saludo}</h1>
//             <h2>{props.saludo}</h2>
//             <ol>React imprime estos valores:
//                 <li>Strings -- {saludo}</li>
//                 <li>Numeros -- {numeros}</li>
//                 <li>Decimales -- {decimales}</li>
//                 <li>Arreglos -- {arrays}</li>
//                 <li>objetos -- {Nombre}</li>
//                 <li>objetos -- {Edad}</li>
//             </ol>
//             <p>Mi primera aplicacion</p>
//         </>

//         // <Fragment> {/*Fragment evita tener que componer le jsx en un contenedor*/}
//         //     <h1>Hola Mundo</h1>
//         //     <p>Mi primera aplicacion</p>
//         // </Fragment>
//     );
// }

FirstApp.propTypes = {
    //Las proptypes sirven para declarar la intencion de cada valor que paso por las props para que a la hora de que otra persona trabaje con mi app en react, deba regirse por esas intenciones del valor, es decir saludo debe ser un string no podria ser un number o un array, etc
    saludo : PropTypes.string.isRequired,
    numeros : PropTypes.number,
    decimales : PropTypes.number,
    arrays : PropTypes.array
}

FirstApp.defaultProps = {
    subtitulo : 'Soy un valor por defecto en las props'
}

export default FirstApp;