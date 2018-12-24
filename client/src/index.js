import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import DataProvider from './context/DataProvider'
import App from './App'



ReactDOM.render(<BrowserRouter>
    <DataProvider>
        <App />
    </DataProvider>
</BrowserRouter>, document.getElementById('root'))