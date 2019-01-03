import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import Analysis from './containers/Analysis'
import Navbar from './components/Navbar'
import Galleries from './containers/Galleries'
import GalleryView from "./components/GalleryView"
// import '../node_modules/bootswatch/dist/materia/bootstrap.min.css'
import './styles/app.css'



class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" render={props => <Home {...props} />} />
                    <Route path="/analysis" render={props => <Analysis {...props} />} />
                    <Route path="/galleries" render={props => <Galleries {...props} />} />
                    <Route path="/galleryView/:id" render = {props => <GalleryView {...props}/>} />
                </Switch>
            </div>
        )
    }
}

export default App