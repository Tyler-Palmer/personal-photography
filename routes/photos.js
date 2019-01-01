const express = require('express')
const photoRouter = express.Router()
const Photo = require ('../models/photo')

photoRouter.get('/', (req, res, next) => {
    Photo.find((err, data) => {
        if(err) {
            res.status(500)
            console.log(res)
            return next(err)
        }
        console.log(res)
        return res.status(200).send(data)
    })
})

photoRouter.get('/gallery1', (req, res, next) => {
    Photo.find((err, data) => {
        if(err) {
            res.status(500)
            console.log(res)
            return next(err)
        }
        console.log(res)
        return res.status(200).send(data)
    })
})

photoRouter.post('/gallery1', (req,res,next) => {
    const newPhoto = new Photo(req.body)
    newPhoto.save((err, newPhoto) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newPhoto)
    })
})

module.exports = photoRouter