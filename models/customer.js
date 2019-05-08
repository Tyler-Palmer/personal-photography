const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
    // firstName: {
    //     type: String,
    // },
    // lastName: {
    //     type: String,
    // },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdEvents: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }
    ]
    // address: {
    //     type: String
    // },
    // city: {
    //     type: String
    // },
    // state: {
    //     type: String
    // },
    // zip: {
    //     type: String
    // } 
})

module.exports = mongoose.model('Customer', customerSchema)