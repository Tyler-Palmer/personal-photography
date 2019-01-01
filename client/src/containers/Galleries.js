import React, { Component } from 'react'
import { Col, Row, Container } from 'reactstrap'
import '../styles/galleries.css'
import { withPhotos } from '../context/PhotosProvider'

class Galleries extends Component{
    constructor(){
        super()
        this.state = {
            gallery1: [],
            gallery2: [],
            gallery3: []
        }
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default withPhotos(Galleries)