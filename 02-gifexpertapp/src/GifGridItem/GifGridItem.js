import React from 'react'
import '../GifGridItem/GifGridItem.css'

export const GifGridItem = ({title, url}) => {
    
    return (
        <>
            <div className="ImgContainer animate__animated animate__fadeInUp">
                <img src={url} alt={title} />
                <p>{title}</p>  
            </div>
        </>
    )
}
