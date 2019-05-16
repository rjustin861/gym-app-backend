// Import db_user
const db_user = require('../models/user')
const mongoose = require('mongoose')

module.exports = function(req, res, next) {

    let userid = req.user._id;
    let id = mongoose.Types.ObjectId(userid);

    db_user.aggregate([
        {
            $geoNear:
            {
                near:
                {
                    type: "Point",
                    coordinates: [parseFloat(req.query.long), parseFloat(req.query.lat)]
                },
                spherical: true,
                distanceField: "distance",
                limit: 20
            },
        },
        {
            $match: { _id: {$ne: id} }
        },
        {
            $project:
            {
                _id: 1,
                name: 1,
                email: 1,
                distance: 1,
                hasWorkout:
                {
                    $cond: { if: { "$gt": [ { "$size": "$workout" }, 0 ] }, then: true, else: false }
                }
            }
        }
    ]).then(function(users) {
        console.log('users', users)
        res.status(200).json(users)
    }).catch(function(error) {
        console.log('error', error)
        next(error)
    })
}
