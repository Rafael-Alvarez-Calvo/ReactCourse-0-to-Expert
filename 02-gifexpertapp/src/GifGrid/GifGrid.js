import React, { useState, useEffect } from 'react'
import { GifGridItem } from '../GifGridItem/GifGridItem';
import {GetGifs} from '../GetGifs/GetGifs'

export const GifGrid = ({category}) => {

    // const [Counter, setCounter] = useState(0);

    const [Images, setImages] = useState([])
    useEffect(() =>{ 
        GetGifs(category)
            .then(setImages)
    }, [category]) //El array de dependencias vacio, hace que solo se pueda ejecutar una vez esa funcion

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

    return (
        <>
            {/* <h2>{category}</h2> */}

            {
                Images.map(d =>
                    <GifGridItem 
                        key= {d.id}
                        { ...d }/> /*mandamos todos los elementos*/
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
