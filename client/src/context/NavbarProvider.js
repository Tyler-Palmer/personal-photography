import React, { Component } from 'react'

const {Provider, Consumer } = React.createContext()

class NavbarProvider extends Component{
    constructor(){
        super()
        this.state = {
            isHomePage: false
        }
    }

setSidebar = () => {
    this.setState({
        isHomePage: true
    })
}
noSidebar = () => {
    this.setState({
        isHomepage: false
    })
}
    render(){
        return(
            <Provider value={{
                    setSidebar: this.setSidebar,
                    noSidebar: this.noSidebar
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
