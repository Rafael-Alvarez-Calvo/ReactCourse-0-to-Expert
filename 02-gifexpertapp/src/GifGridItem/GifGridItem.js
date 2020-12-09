import React from 'react'
import '../GifGridItem/GifGridItem.css'

export const GifGridItem = ({title, url}) => {
    
    return (
        <>
            <div className="ImgContainer">
                <img src={url} alt={title} />
                <p>{title}</p>  
            </div>
        </>
    )
}
