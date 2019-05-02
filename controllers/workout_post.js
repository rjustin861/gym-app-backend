// Import db_user
const db_user = require('../models/user')

module.exports = function(req, res, next) {

    let userid = req.query.user_id

    // this is temporary
    userid = '5cc94f1112c41412abe3a553'
    let workout = req.body.workout
    console.log('workout', workout)
    
    db_user.findOneAndUpdate({_id:userid}, 
        {$push: {workout:workout}})
        .then(function(new_workout) {
        res.status(200).json(new_workout)
	})
}
