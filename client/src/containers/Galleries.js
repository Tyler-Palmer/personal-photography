import React, { Component } from 'react'
import { Col, Row, Container } from 'reactstrap'
import '../styles/galleries.css'
import { withPhotos } from '../context/PhotoProvider'
import Gallery from 'react-photo-gallery'

class Galleries extends Component{

    render(){
        console.log(this.props.gallery1)
        return(
            <div>
                <Gallery photos = {this.props.gallery1} />
                <div className ="hello-image"
                style = {{backgroundImage: `url("https://images.pexels.com/photos/988872/pexels-photo-988872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`}}
                ></div>
            </div>
        )
    }
}

export default withPhotos(Galleries)