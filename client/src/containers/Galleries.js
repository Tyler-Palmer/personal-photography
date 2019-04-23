import React, { Component } from 'react'
import { Col, Row, Container } from 'reactstrap'
import '../styles/galleries.css'
import { withPhotos } from '../context/PhotoProvider'
import Gallery1 from '../components/Gallery1'
import Gallery2 from '../components/Gallery2'
import Gallery3 from '../components/Gallery3'
import { withNav } from '../context/NavbarProvider'


class Galleries extends Component {
    componentDidMount() {
        this.props.setDisplay()
    }
    render() {
        console.log(this.props.gallery1)
        console.log(this.props.gallery2)
        return (
            <div id="galleries">
                <p>This gallery only includes test images served up by my database right now, but will be original images in the future.</p>
                <div className="galleryBar">
                    <h3>Gallery1</h3>
                </div>
                <div id="gallery1">
                    {
                        this.props.gallery1.map((item, i) => <Gallery1 {...item} key={i} />)
                    }
                </div>
                <div className="galleryBar">
                    <h3>Gallery2</h3>
                </div>
                <div id="gallery2">
                
                    {
                        this.props.gallery2.map((item, i) => <Gallery2 {...item} key={i} />)
                    }
                </div>
                <div className="galleryBar">
                    <h3>Gallery3</h3>
                </div>
                <div id="gallery3">
            
                    {
                        this.props.gallery3.map((item, i) => <Gallery3 {...item} key={i} />)
                    }
                </div>
            </div>
        )
    }
}

export default withNav(withPhotos(Galleries))