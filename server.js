const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 9000
require('dotenv').config()
const path = require("path")
const expressGraphQL = require('express-graphql')
const { buildSchema } = require('graphql')
const bodyParser = require('body-parser')
const cors = require('cors')


// Middleware
app.use(express.json({limit: '200mb'}))
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))
app.use(
    "/graphql",
    expressGraphQL({
        schema: buildSchema(`
            type RootQuery {
                photos: [String!]!
            }

            type RootMutation {
                createPhoto(name: String!): String
            }

            schema {
                query: RootQuery
                mutation: RootMutation
            }
        `),
        rootValue: {
            photos: () => {
                return ['thing1', 'thing2', 'thing3', 'thing4']
            },
            createPhoto: (args) => {
                const photoName = args.name
                return photoName
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