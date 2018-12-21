import React, { Component } from 'react'
import '../styles/analysis.css'
import '@material-ui/core'
import axios from 'axios'

class Analysis extends Component {
    constructor(){
        super()
        this.state = {
            exposureTime: []
        }
    }

    getExposureTime = () => {
        axios.get('/metadata/exposureTime').then(res => {
            this.setState({
                exposureTime: res.data
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getExposureTime()
    }

    render() {
        console.log(this.state.apertureData)
        return (
            <div>
                <div>
                    This is the Analysis Page
                </div>
            </div>
        )
    }
}

export default Analysis