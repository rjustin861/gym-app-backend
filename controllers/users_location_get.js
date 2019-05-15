// Import db_user
const db_user = require('../models/user')

module.exports = function(req, res, next) {

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
            $project:
            {
                _id: 1,
                name: 1,
                email: 1,
                distance: 1
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
