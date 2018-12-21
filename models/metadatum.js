const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dataSchema = new Schema({
    FileName: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    Directory: {
        type: String,
        lowercase: true,
    },
    CreateDate: {
        type: String
    },
    FileSize: {
        type: String,
    },
    FileType: {
        type: String,
    },
    ImageWidth: {
        type: Number
    },
    ImageHeight: {
        type: Number
    },
    Make: {
        type: String
    },
    Model: {
        type: String
    },
    ISO: {
        type: Number
    },
    ExposureTime: {
        type: String
    },
    ApertureValue: {
        type: Number
    },
    FocalLength: {
        type: String
    },
    Quality: {
        type: String
    },
    Lens: {
        type: String
    },
    LensID: {
        type: String
    },
    Megapixels: {
        type: Number
    },
    FOV: {
        type: String
    }
})

module.exports = mongoose.model('Metadatum', dataSchema)