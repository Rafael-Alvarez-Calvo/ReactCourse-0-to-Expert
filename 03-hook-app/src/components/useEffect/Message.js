import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [Coords, setCoords] = useState({ x:0, y:0 });
    const {x, y} = Coords;

    useEffect(() => {

        const MouseMove = (e) =>{

            const coords = {
                x: e.x,
                y : e.y,
            };

            setCoords(coords);

            // console.log(coords)
            // console.log("   :D    ")
            
        }

        window.addEventListener('mousemove', MouseMove);

        // window.addEventListener('mousemove', (e) =>{
        //     // console.log(e);
        //     // const coords = {
        //     //     x: e.x,
        //     //     y : e.y,
        //     // }
        //     // console.log(coords)
        //     console.log("   :D    ")
        // }) Esta funcion retornaria un bucle infinito ya que nunca cierra el evento

        return () => {
            window.removeEventListener('mousemove', MouseMove);
        }
    }, [])
    return (
        <div>
            <h3>Eres genial!</h3>
            <p>
                x:{x} y: {y}
            </p>
        </div>
    )
}
