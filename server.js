const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 9000
require('dotenv').config()
const path = require("path")
const expressGraphQL = require('express-graphql')
const { buildSchema } = require('graphql')
const bodyParser = require('body-parser')
// const cors = require('cors')

const app = express()

// Middleware
app.use(express.json({limit: '200mb'}))

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))

const photos = []

app.use(bodyParser.json())

// Routes

app.use('/photos', require('./routes/photos'))
app.use('/customer', require('./routes/customers'))
app.use('/metadata', require('./routes/metadata'))
app.use('/events', require('./routes/events'))
// Connect to the DB

// mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost:27017/photoweb', {useNewUrlParser: true, useCreateIndex: true}, () => {
//     console.log("We're connected, captain!")
// }).catch(err => console.log(err))

//MongoDB with GraphQL Test

mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost:27017/graphql-test', {useNewUrlParser: true, useCreateIndex: true}, () => {
    console.log("We're connected, captain!")
}).catch(err => console.log(err))

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