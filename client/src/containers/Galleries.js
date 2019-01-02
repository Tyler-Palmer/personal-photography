import React, { Component } from 'react'
import { Col, Row, Container } from 'reactstrap'
import '../styles/galleries.css'
import { withPhotos } from '../context/PhotoProvider'
import Gallery1 from '../components/Gallery1'
import '../styles/gallery.css'

class Galleries extends Component{

    render(){
        console.log(this.props.gallery1)
        return(
            <div id="galleries">
                <div id="gallery1">
                    <h3>Gallery1</h3>
                    {
                    this.props.gallery1.map((item,i) => <Gallery1 {...item} key={i} />)
                    }
                </div>
                <div id="gallery2">
                    <h3>Gallery2</h3>
                    {

                    }
                </div>
                <div id="gallery3">
                    <h3>Gallery3</h3>
                    {

                    }
                </div>
            </div>
        )
    }
}

export default withPhotos(Galleries)