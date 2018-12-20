const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const photoRouter = express.Router()
const PORT = process.env.PORT || 7000
require('dotenv').config()

// Middleware
app.use(express.json())
app.use(morgan)('dev')

// Routes

app.use('/photos', require('./routes/photos'))
app.use('/customer', require('./routes/customer'))

// Global Error Handler

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message},"It's broken. Fix it.")
})

// Connect to the DB

mongoose.connect('mongodb://localhost:27017/photoweb', {useNewUrlParser: true}, () => {
    console.log("We're connected, captain!")
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})