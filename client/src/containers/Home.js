import React, { Component, Fragment } from 'react'
import '../styles/home.css'
import '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'

class Home extends Component {
    render(){
        return (
            <div>
            <Fragment>
                    <CssBaseline />
                    {
                        <div>
                            This is the Home Page
                        </div>
                    }
            </Fragment>
            </div>
        )
    }
}

export default Home