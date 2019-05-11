// Import db_user
const db_user = require('../models/user')

module.exports = function(req, res, next) {

    console.log('request inside workput post', req.user._id)
    
    let userid = req.user._id
    let workout = req.body.workout
    console.log('workout', workout)
    
    db_user.findOneAndUpdate( {_id:userid}, {$push: {workout:workout}}, {new: true})
        .then(function(new_workout) {
        res.status(200).json(new_workout)
	})
}
