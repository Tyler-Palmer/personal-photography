const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 9000
require('dotenv').config()
const path = require("path")


// Middleware
app.use(express.json({limit: '200mb'}))
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))

// Routes

app.use('/photos', require('./routes/photos'))
// app.use('/customer', require('./routes/customers'))
app.use('/metadata', require('./routes/metadata'))
// Connect to the DB

mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost:27017/photoweb', {useNewUrlParser: true, useCreateIndex: true}, () => {
    console.log("We're connected, captain!")
})

// Global Error Handler

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Listening
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})