import React from 'react'

const Gallery1 = (props) =>{
    console.log(props)
    return(
        <div className="image1" style={{backgroundImage: `url(${props.src})`}}>
        </div>
    )
}

export default Gallery1