import React, { Component } from 'react'

const {Provider, Consumer } = React.createContext()

class NavbarProvider extends Component{
    constructor(){
        super()
        this.state = {
            displays: false
        }
    }

setDisplay = () => {
    this.setState({
        displays: true
    }, () => {
        console.log(this.state.isHomePage)
    })
}
noDisplay = () => {
    this.setState({
        displays: false
    })
}
    render(){
        return(
            <Provider value={{
                    ...this.state,
                    setDisplay: this.setDisplay,
                    noDisplay: this.noDisplay
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withNav = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)

export default NavbarProvider
