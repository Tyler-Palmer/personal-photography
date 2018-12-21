import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Analysis from './containers/Analysis'

class App extends Component {
    render() {
        return (
            <div>
                <Fragment>
                    <CssBaseline />
                    {
                        <Switch>
                            <Route exact path="/" render={props => <Home {...props} />} />
                            <Route path="/analysis" render={props => <Analysis {...props} />} />
                        </Switch>
                    }
                </Fragment>
            </div>
        )
    }
}

export default App