import React, { Component } from 'react'
import { Col, Row, Container } from 'reactstrap'
import '../styles/galleries.css'
import { withPhotos } from '../context/PhotoProvider'
import Gallery from 'react-photo-gallery'

class Galleries extends Component{

    render(){
        console.log(this.props.state.gallery1)
        return(
            <div>
                <Gallery photos = {this.props.state.gallery1} />
            </div>
        )
    }
}

export default withPhotos(Galleries)