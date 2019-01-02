import React from 'react'

const Gallery2 = (props) => {
    return (
        <div className="image2 gallerySlide" style={{ backgroundImage: `url(${props.src})` }}>
        </div>
    )
}

export default Gallery2