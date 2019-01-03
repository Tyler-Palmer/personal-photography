const express = require('express')
const photoRouter = express.Router()
const cors = require('cors')
const Photo = require ('../models/photo')


photoRouter.get('/', (req, res, next) => {
    Photo.find((err, data) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

//gallery1

photoRouter.get('/gallery1', (req, res, next) => {
    Photo.find((err, data) => {
        if(err) {
            res.status(500)
            return next(err)
        }
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

photoRouter.get('/galleryView/:id', (req, res, next) =>{
    Photo.findOne({_id: req.params.id}, (err, data) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

//gallery2

photoRouter.get('/gallery2', cors(), (req, res, next) => {
    Photo.find((err, data) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

photoRouter.post('/gallery2', (req,res,next) => {
    const newPhoto = new Photo(req.body)
    newPhoto.save((err, newPhoto) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newPhoto)
    })
})

//gallery3

photoRouter.get('/gallery3', cors(), (req, res, next) => {
    Photo.find((err, data) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

photoRouter.post('/gallery3', (req,res,next) => {
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