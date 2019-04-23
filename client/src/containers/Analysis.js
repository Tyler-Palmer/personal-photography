import React, { Component } from 'react'
import { Col, Row, Container } from 'reactstrap'
import '../styles/analysis.css'
import { VictoryPie } from 'victory'
import { withData } from '../context/DataProvider'

class Analysis extends Component {

    componentDidMount() {
        this.props.getExposureTime()
        this.props.getSunBurstData()
        this.props.getISO()
        this.props.getAperture()
        this.props.getCreateDate()
    }

    render() {
        console.log(this.props.sunBurstData)
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={18} md={12}>
                            This is the Analysis Page, In the future, this will hold a detailed graphical analysis of the metadata from photos that I take, along with some commentary.
                        <VictoryPie data={this.props.exposureTime}
                                // data accessor for x values
                                x="_id"
                                // data accessor for y values
                                y="total" />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withData(Analysis)