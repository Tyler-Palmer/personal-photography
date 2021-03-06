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

    MetaDatum.aggregate([
        {
            $group: {
                "_id": "$ExposureTime", "total": { $sum: 1 }
            }
        }], (err, data) => {
            if (err) {
                res.status(500)
                console.log(res)
                return next(err)
            }
            console.log(res)
            return res.status(200).send(data)
        })
})

metadataRouter.get('/ISO', (req, res, next) => {
    MetaDatum.aggregate([
        {
            $group: {
                "_id": "$ISO", "total": { $sum: 1 }
            }
        }], (err, data) => {
            if (err) {
                res.status(500)
                console.log(res)
                return next(err)
            }
            console.log(res)
            return res.status(200).send(data)
        })
})

metadataRouter.get('/apertureValue', (req, res, next) => {
    MetaDatum.aggregate([
        {
            $group: {
                "_id": "$ApertureValue", "total": { $sum: 1 }
            }
        }], (err, data) => {
            if (err) {
                res.status(500)
                console.log(res)
                return next(err)
            }
            console.log(res)
            return res.status(200).send(data)
        })
})

metadataRouter.get('/createDate', (req, res, next) => {
    MetaDatum.aggregate([
        {
            $group: {
                "_id": "$CreateDate", "total": { $sum: 1 }
            }
        }], (err, data) => {
            if (err) {
                res.status(500)
                console.log(res)
                return next(err)
            }
            console.log(res)
            return res.status(200).send(data)
        })
})

// { 
//     $group: { 
//       _id:   { age: "$age", gender: "$gender" }, 
//       names: { $addToSet: "$name" } 
//     } 
//   }, 
//   { 
//     $group: {
//       _id: { age: "$_id.age" }, 
//       children: { $addToSet: { gender: "$_id.gender", names:"$names" } } 
//     } 
//   } 

// {
//     $group: {
//         _id: "$_id.ASSIGN_ID",
//         STATUS_GROUP: {
//             $push: {
//                 STATUS: "$_id.STATUS",
//                 count: "$count"
//             }
//         }
//     }
// }])


//Not Working

// [
//     {
//         $group: {
//             name: "ISO",
//             children:{
//                 $push: {
//                     ISO: "$ISO", total: { $sum: 1 },
//                     apertures: "$ApertureValue", total: { $sum: 1 }
//                 }
//             }
//         }
//     },
//     {
//         $group: {
//             name: {
//                 ISO: "$name.ISO"
//             },
//             children: {
//                 $push: {
//                     apertures: "$apertures",
//                     "total": "$total"
//                 }
//             }
//         }
//     }
// ]

// [
//     {
//         $group: {
//             _id: {
//                 ISO: "$ISO", total: { $sum: 1 }
//             },
//             apertures: { $addToSet: "$ApertureValue" }, total: { $sum: 1 }
//         }
//     },
//     {
//         $group: {
//             _id: {
//                 ISO: "$_id.ISO"
//             },
//             children: {
//                 $push: {
//                     apertures: "$apertures",
//                     "total": "$total"
//                 }
//             }
//         }
//     }]

metadataRouter.get('/bigData', (req, res, next) => {
    const output = {};
    // MetaDatum.find()
    //     .then(mainData => mainData.reduce((acc, doc) => {

    //     }, {name: 'photos', children: [], total: 0}),
    // MetaDatum.mapReduce({
    //     map: function () { emit(this.ISO, 1) },
    //     reduce: function (key, val) { 
    //         return key 
    //     }
    // },
    MetaDatum.aggregate({
        $group: {
            _id: {
                ISO: "$ISO"
            },
        }
    })
        .then(isos => {
            isos.reduce((acc, iso) => {
                MetaDatum.aggregate({
                    $match: { ISO: iso._id.ISO }
                }).then()
            })
        })


    MetaDatum.aggregate([
        {
            $group: {
                _id: {
                    ISO: "$ISO"
                },
                // apertures: { $addToSet: { name: "$ApertureValue", exposureTime: "$ExposureTime" } }, total: { $sum: 1 }
            }
        },
        // {
        //     $group: {
        //         _id: {
        //             ISO: "$_id.ISO"
        //         },
        //         children: {
        //             $push: {
        //                 apertures: "$apertures",
        //                 "total": "$total"
        //             }
        //         }
        //     }
        // }
    ],
        (err, data) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(data)
        })
})


metadataRouter.post('/', (req, res, next) => {
    const newData = req.body;
    const filtered = [];
    newData.reduce(
        (acc, item) => {
            if (!item.FileName || acc[item.FileName]) {
                return acc;
            }
            else {
                acc[item.FileName] = true;
                filtered.push(item);
                return acc;
            }
        },
        {}
    );

    Promise.all(filtered.map(item => {
        const meta = new MetaDatum(item);
        return meta.save()
    }))
        .then(results => {
            return res.status(201).send({ 'success': 'new documents added!', 'data': results })
        })
        .catch(err => next(err));
})

module.exports = metadataRouter