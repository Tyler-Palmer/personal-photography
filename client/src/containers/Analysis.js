import React, { Component } from 'react'
import '../styles/analysis.css'
import '@material-ui/core'
import axios from 'axios'
import { VictoryPie} from 'victory'
import { withData } from './context/DataProvider'

class Analysis extends Component {

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
        return (
            <div>
                <div>
                    This is the Analysis Page
                        <VictoryPie data={this.state.exposureTime}
                            // data accessor for x values
                            x="_id"
                            // data accessor for y values
                            y="total" />
                </div>
            </div>
        )
    }
}

export default withData(Analysis)