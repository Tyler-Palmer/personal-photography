import React, { Component } from 'react'
import '../styles/analysis.css'
import '@material-ui/core'
import { VictoryPie} from 'victory'
import { withData } from '../context/DataProvider'

class Analysis extends Component {

    componentDidMount() {
        this.props.getExposureTime()
    }

    render() {
        return (
            <div>
                <div>
                    This is the Analysis Page
                        <VictoryPie data={this.props.exposureTime}
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