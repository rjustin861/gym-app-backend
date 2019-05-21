// Import db_user
const db_user = require('../models/user')
const moment = require('moment-timezone')

module.exports = function(req, res, next) {

    console.log('request inside workput post', req.user._id)
    
    let userid = req.user._id
    let workout = req.body.workout
    workout[0]['start_date'] = moment.tz(workout[0]['start_date'], 'Asia/Singapore').utc().format()
    workout[0]['end_date'] = moment.tz(workout[0]['end_date'], 'Asia/Singapore').utc().format()
    
    console.log('start date', workout[0]['start_date'])
    console.log('end date', workout[0]['end_date'])
    console.log('workout', workout)

    db_user.findOneAndUpdate( {_id:userid}, {$push: {workout:workout}}, {new: true})
        .then(function(new_workout) {
        res.status(200).json(new_workout)
	})
}
