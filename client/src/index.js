import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import DataProvider from './context/DataProvider'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootswatch/dist/materia/bootstrap.min.css'
import './styles/style.css'



ReactDOM.render(<BrowserRouter>
    <DataProvider>
        <App />
    </DataProvider>
</BrowserRouter>, document.getElementById('root'))