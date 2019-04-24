import React, { Component } from "react";
import { Link } from "react-router-dom";
// import ImageGallery from 'react-image-gallery'
// import { UncontrolledCarousel } from 'reactstrap'
// import { Col, Row, Container } from 'reactstrap'
import { withNav } from "../context/NavbarProvider";
import Slider from "../components/Slider/Slider";
import "../styles/home.css";
import "react-image-gallery/styles/css/image-gallery.css";

class Home extends Component {
    componentDidMount() {
        this.props.setDisplay();
    }

    render() {
        // const images = [
        //     {
        //         original: 'https://drive.google.com/open?id=1ejy54Fl6IqS8qldLhIAHz9D-XiW8iAAf',
        //         thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        //     },
        //     {
        //         original: 'https://drive.google.com/open?id=1DKgyTGf8czW4ZEEm-x0FWnUuerRAy6ij',
        //         thumbnail: 'http://lorempixel.com/250/150/nature/2/'
        //     },
        //     {
        //         original: 'https://drive.google.com/open?id=1rF_dKEAJwtWaiGq7bBmNqnNYe7ZN1GcD',
        //         thumbnail: 'http://lorempixel.com/250/150/nature/3/'
        //     }
        // ]
        return (
            <div className="home">
                {/* <ImageGallery items={images.original}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
                autoPlay={true}
                slideInterval={12000}
                slideDuration={900}
                useBrowserFullscreen={true} /> */}
                <Slider />
                <div id="homeBackground">
                    <Link to="/galleries">
                        <div id="homeBox" className="hvr-bounce-to-right">
                            <h1>Tyler Palmer</h1>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default withNav(Home);
