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


    render() {
        return (
            <Provider value={{}}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withData = C => props => {
    <Consumer>
        {value = <C {...value} {...props} />}
    </Consumer>
}

export default DataProvider