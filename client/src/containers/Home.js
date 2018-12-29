import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'
import { Col, Row, Container } from 'reactstrap'
import '../styles/home.css'
import "react-image-gallery/styles/css/image-gallery.css";


class Home extends Component {
    render() {
        const images = [
            {
                original: 'http://lorempixel.com/1000/600/nature/1/',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/'
            }
        ]
        return (
            <ImageGallery items={images}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
                autoPlay={true}
                slideInterval={12000}
                slideDuration={900}
                disableArrowKeys={true}
                useBrowserFullscreen={true} />

        )
    }
}

export default Home