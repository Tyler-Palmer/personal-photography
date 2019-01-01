const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const photoRouter = express.Router()
const PORT = process.env.PORT || 7000
require('dotenv').config()

// Middleware
app.use(express.json({limit: '200mb'}))
app.use(morgan('dev'))

// Routes

app.use('/photos', require('./routes/photos'))
// app.use('/customer', require('./routes/customers'))
app.use('/metadata', require('./routes/metadata'))

// Connect to the DB

mongoose.connect('mongodb://localhost:27017/photoweb', {useNewUrlParser: true, useCreateIndex: true}, () => {
    console.log("We're connected, captain!")
})

// Global Error Handler

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Listening
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})