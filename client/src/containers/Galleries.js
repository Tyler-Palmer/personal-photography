import React, { Component } from 'react'
import { Col, Row, Container } from 'reactstrap'
import '../styles/galleries.css'
import { withData } from '../context/DataProvider'

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

export default withData(Galleries)