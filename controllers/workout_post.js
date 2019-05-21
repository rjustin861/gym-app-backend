// Import db_user
const db_user = require('../models/user')
const moment = require('moment')

module.exports = function(req, res, next) {

    console.log('request inside workput post', req.user._id)
    
    let userid = req.user._id
    let workout = req.body.workout
    workout.start_date = moment(workout['start_date']).utc()
    workout.end_date = moment(workout['end_date']).utc()
    
    db_user.findOneAndUpdate( {_id:userid}, {$push: {workout:workout}}, {new: true})
        .then(function(new_workout) {
        res.status(200).json(new_workout)
	})
}
