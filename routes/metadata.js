const express = require('express')
const metadataRouter = express.Router()
const MetaDatum = require('../models/metadatum')

metadataRouter.get('/', (req, res, next) => {
    MetaDatum.find((err, data) => {
        if (err) {
            res.status(500)
            console.log(res)
            return next(err)
        }
        console.log(res)
        return res.status(200).send(data)
    })
})

metadataRouter.get('/exposureTime', (req, res, next) => {
    
    MetaDatum.aggregate([{
        $group: { "_id": "$ExposureTime", "total": {$sum : 1} } 
    },(err, data) => {
        if (err) {
            res.status(500)
            console.log(res)
            return next(err)
        }
        console.log(res)
        return res.status(200).send(data)
    }])
})


metadataRouter.post('/', (req, res, next) => {
    const newData = req.body
    MetaDatum.insertMany(newData)
        .then(res => {
            if (err) {
                res.status(500)
                console.log(res)
                return next(err)
            }
            console.log("result", res)
            return res.status(201).json({ 'success': 'new documents added!', 'data': result })
        })
})

module.exports = metadataRouter