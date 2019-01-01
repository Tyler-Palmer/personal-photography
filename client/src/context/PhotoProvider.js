import React, { Component } from 'react'
import axios from 'axios'

const { Provider, Consumer } = React.createContext()

class PhotoProvider extends Component{
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
           <Provider value={{
               gallery1: this.state.gallery1,
               gallery2: this.state.gallery2,
               gallery3: this.state.gallery3
           }}>
                {this.props.children}
           </Provider>
        )
    }
}

export const withPhotos = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)

export default PhotoProvider