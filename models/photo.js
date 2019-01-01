const mongoose = require('mongoose')
const Schema = mongoose.Schema

const photoSchema = new Schema({
    FileName: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    URL: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Photo', photoSchema)