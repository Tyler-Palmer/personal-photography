const mongoose = require('mongoose')
const Schema = mongoose.Schema

const photoSchema = new Schema({
    filename: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    src: {
        type: String,
        required: true,
    },
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('Photo', photoSchema)