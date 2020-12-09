import React, { useState } from 'react'
import {AddCategory} from './AddCategory/AddCategory'
import { GifGrid } from './GifGrid/GifGrid';
import './GifExpertApp.css'
// import PropTypes from 'prop-types'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Hola']);

    // const handleAdd = () =>{
    //     // setCategories([add,...categories]) //Lo añade por delante
    //     setCategories([...categories, add]) //Lo añade por detras
    // }

    return (
        <div>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr />
            {/* <button onClick={handleAdd}>Añadir</button> */}
            <div className="containerTitleSearch"><h3>{categories}</h3></div>
            <ol className="Container">
                {categories.map(category =>
                    <GifGrid 
                        key={category}
                        category={category} />
                )}
                {/*el key es equivalente al id y react lo trata como error sino se pone pero no añade id al html*/}

                {/* {categories.map(category =>{
                    return <li id={category} key={category}> {category} </li>
                })}el key es equivalente al id y react lo trata como error sino se pone pero no añade id al html */}
            </ol>
        </div>
    )
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp
