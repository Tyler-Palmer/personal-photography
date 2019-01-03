import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'
import { UncontrolledCarousel } from 'reactstrap'
import { Col, Row, Container } from 'reactstrap'
import { withNav } from '../context/NavbarProvider'
import '../styles/home.css'
import "react-image-gallery/styles/css/image-gallery.css";


class Home extends Component {

    componentDidMount() {
        this.props.noDisplay()
    }

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
            <div>
                {/* <ImageGallery items={images}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
                autoPlay={true}
                slideInterval={12000}
                slideDuration={900}
                useBrowserFullscreen={true} /> */}
                <div id="homeBackground">
                    <div id="homeBox">
                        <h1>Tyler Palmer</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default withNav(Home)