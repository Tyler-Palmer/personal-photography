import React, { Component } from 'react'
import '../styles/analysis.css'
import '@material-ui/core'
import axios from 'axios'
import { VictoryBar } from 'victory'

const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
]

class Analysis extends Component {
    constructor() {
        super()
        this.state = {
            exposureTime: [],
            ISO: [],
            apertureValue: [],
            FocalLength: [],
            CreateDate: []

        }
        console.log(this.state.exposureTime)
    }

    getExposureTime = () => {
        axios.get('/metadata/exposureTime').then(res => {
            this.setState({
                exposureTime: res.data
            })
        })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getExposureTime()
    }

    render() {
        console.log(this.state.exposureTime)
        return (
            <div>
                <div>
                    This is the Analysis Page
                    <VictoryBar data={this.state.exposureTime}
                        // data accessor for x values
                        x="_id"
                        // data accessor for y values
                        y="total" />
                </div>
            </div>
        )
    }
}

export default Analysis