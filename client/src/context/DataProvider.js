import React, { Component } from 'react'
import axios from 'axios'

const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            exposureTime: [],
            ISO: [],
            apertureValue: [],
            FocalLength: [],
            CreateDate: []
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


    render() {
        return (
            <Provider value={{
                exposureTime: this.state.exposureTime,
                ISO: this.state.ISO,
                apertureValue: this.state.apertureValue,
                FocalLength: this.state.FocalLength,
                CreateDate: this.state.CreateDate,
                getExposureTime: this.getExposureTime
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withData = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)

export default DataProvider