import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import DataProvider from './context/DataProvider'
import PhotoProvider from './context/PhotoProvider'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootswatch/dist/materia/bootstrap.min.css'
import './styles/style.css'



ReactDOM.render(<BrowserRouter>
    <PhotoProvider>
        <DataProvider>
            <App />
        </DataProvider>
    </PhotoProvider>
</BrowserRouter>, document.getElementById('root'))