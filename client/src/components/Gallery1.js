import React from 'react'

const Gallery1 = (props) =>{
    return(
        <div className="image1 gallerySlide" style={{backgroundImage: `url(${props.src})`}}>
        </div>
    )
}

export default Gallery1