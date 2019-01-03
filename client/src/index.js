import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import DataProvider from './context/DataProvider'
import PhotoProvider from './context/PhotoProvider'
import NavbarProvider from './context/NavbarProvider'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootswatch/dist/materia/bootstrap.min.css'
import './styles/style.scss'



ReactDOM.render(<BrowserRouter>
    <NavbarProvider>
        <PhotoProvider>
            <DataProvider>
                <App />
            </DataProvider>
        </PhotoProvider>
    </NavbarProvider>
</BrowserRouter>, document.getElementById('root'))