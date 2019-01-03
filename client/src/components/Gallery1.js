import React from 'react'

const Gallery1 = (props) =>{
    const generateRandomClass = () =>{
        const randomNumber = Math.floor(Math.random() * 200);
        if(randomNumber % 3 === 0 && randomNumber % 5 === 0){
            return "big-one"
        } else if(randomNumber % 3 === 0){
            return "portrait"
        } else if(randomNumber % 5 === 0){
            return "square"
        } else {
            return "landscape"
        }
    }
    return(
        <div className={`image1 gallerySlide ${generateRandomClass()}`} style={{backgroundImage: `url(${props.src})`}}>
        </div>
    )
}

export default Gallery1