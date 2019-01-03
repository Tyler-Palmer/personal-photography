import React from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from "react-lazyload"

const Gallery2 = (props) => {
    const generateRandomClass = () => {
        const randomNumber = Math.floor(Math.random() * 200);
        if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
            return "big-one"
        } else if (randomNumber % 3 === 0) {
            return "landscape"
        } else if (randomNumber % 5 === 0) {
            return "portrait"
        } else {
            return "square"
        }
    }
    return (
            <Link to={`/galleryView/${props._id}`} className={`image2 ${generateRandomClass()}`}>
                <div className={`image2 gallerySlide`} style={{ backgroundImage: `url(${props.src})`, width: "100%", height: "100%" }}>
                </div>
            </Link>
    )
}

export default Gallery2