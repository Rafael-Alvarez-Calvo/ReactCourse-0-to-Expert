import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
import { GifGridItem } from '../GifGridItem/GifGridItem';
import '../GifGrid/GifGrid.css'

// import React, { useState, useEffect } from 'react'
// import {GetGifs} from '../GetGifs/GetGifs'

export const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs(category);


    // const [Counter, setCounter] = useState(0);

    // const [Images, setImages] = useState([])
    // useEffect(() =>{ 
    //     GetGifs(category)
    //         .then(setImages)
    // }, [category]) //El array de dependencias vacio, hace que solo se pueda ejecutar una vez esa funcion, con category en la dependencia hacemos que ese codigoo se ejecute siempre que la caegory cambie

    // const getGifs = async() =>{

    //     await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=52&api_key=SDjhfqG4VxMTu2BKkv1ksriZ5APoyWMS`)
    //     .then(res => res.json())
    //     .then(({data}) => {
    //         // console.log(data);
    //         const gifs = data.map(d =>{
    //             return {
    //                 id : d.id,
    //                 title : d.title,
    //                 url : d.images?.downsized_medium.url
    //             }
    //         })

    //         // console.log(gifs)
    //         setImages(gifs);
    //     })

    // }

    //Se puede hacer el fetch aqui tambien pero se hace como helper

    return (
        <>
            {/* <h2>{category}</h2> */}

            {loading && <p className="loading animate__animated animate__flash">Loading...</p>}
            {/* {loading ? 'Cargando...' : 'Gifs cargados'} */}

            {
                data.map(d =>
                    <GifGridItem 
                        key= {d.id}
                        { ...d } /> /*mandamos todos los elementos*/
                    )
            }

            {/* {Images.map(({id, title}) =>{
                return <li id={id} key={id}> {title} </li>
                })
            } */}
            
            {/* <h3>{Counter}</h3>
            <button onClick={() => setCounter(Counter + 1)}></button> */}
        </>
    )
}
