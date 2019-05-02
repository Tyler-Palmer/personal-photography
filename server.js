const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 9000
require('dotenv').config()
const path = require("path")
const expressGraphQL = require('express-graphql')
const { buildSchema } = require('graphql')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// Middleware
app.use(express.json({limit: '200mb'}))

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))

const photos = []

app.use(bodyParser.json())

app.use(
    "/graphql",
    expressGraphQL({
        schema: buildSchema(`
            type Photo {
                _id: ID!
                title: String!
                description: String!
                price: Float!
                date: String!
            }

            input PhotoInput {
                title: String!
                description: String!
                price: Float!
                date: String!
            }

            type RootQuery {
                photos: [Photo!]!
            }

            type RootMutation {
                createPhoto(photoInput: PhotoInput): Photo
            }

            schema {
                query: RootQuery
                mutation: RootMutation
            }
        `),
        rootValue: {
            photos: () => {
                return photos
            },
            createPhoto: args => {
                const photo = {
                    _id: Math.random().toString(),
                    title: args.photoInput.title,
                    description: args.photoInput.description,
                    price: +args.photoInput.price,
                    date: args.photoInput.date
                }
                photos.push(photo)
                return photo
            }
        },
        graphiql: true
    })
)

// Routes

app.use('/photos', require('./routes/photos'))
// app.use('/customer', require('./routes/customers'))
app.use('/metadata', require('./routes/metadata'))
// Connect to the DB

mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost:27017/photoweb', {useNewUrlParser: true, useCreateIndex: true}, () => {
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