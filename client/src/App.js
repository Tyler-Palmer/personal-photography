import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home'


class App extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" render = {props => <Home {...props}/>} />
                </Switch>
            </div>
        )
    }
}

export default App