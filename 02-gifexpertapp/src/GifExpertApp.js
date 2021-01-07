import React, { useState } from 'react'
import {AddCategory} from './AddCategory/AddCategory'
import { GifGrid } from './GifGrid/GifGrid';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import './GifExpertApp.css'
// import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Hola']);
    const [currentPage, setCurrentPage] = useState(1)
    const classes = useStyles();

    // const handleAdd = () =>{
    //     // setCategories([add,...categories]) //Lo añade por delante
    //     setCategories([...categories, add]) //Lo añade por detras
    // }

    return (
        <div>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <div className="containerTitleSearch animate__animated animate__fadeIn"><h3>{categories}</h3></div>
            <div id="paginationContainer" className={classes.root}>
                <Pagination count={10} color="primary" className="pagination" />
            </div>
            <ol className="Container">
                {categories.map(category =>
                    <GifGrid 
                        key={category}
                        category={category}
                        page={currentPage} />
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
