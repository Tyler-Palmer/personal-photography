import React from 'react'

const Gallery3 = (props) => {
    return (
        <div className="image3 gallerySlide" style={{ backgroundImage: `url(${props.src})` }}>
        </div>
    )
}

export default Gallery3