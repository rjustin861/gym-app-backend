// Import db_user
const db_user = require('../models/user')
const mongoose = require('mongoose')
const moment = require('moment')

module.exports = function(req, res, next) {

    let userid = req.query.user_id
    const start = moment.utc(req.query.start, 'yyyy-MM-DD').toDate()
    const end = moment.utc(req.query.end, 'yyyy-MM-DD').endOf('Day').toDate()

    console.log('start', start)
    console.log('end', end)
    
    // this is temporary
    userid = '5cc94f1112c41412abe3a553'
    let id = mongoose.Types.ObjectId(userid)
    
    // db_user.aggregate([
    //     {
    //         $unwind: "$workout"
    //     },
    //     {
    //         $match: 
    //         {
    //             _id: id,
    //             "workout.start_date": {$gte: start, $lte: end}
    //         }
    //     },
    //     {
    //         $group:
    //         {
    //             _id: "$_id",
    //             workout: {$push: "$workout"}
    //         }
    //     },
    //     {
    //         $project:
    //         {
    //             workout: 1
    //         }
    //     }
    db_user.aggregate([
        {
            $match: {_id: id}
        },
        {
            $unwind: "$workout"
        },
        {
            $match: 
            { 
                "workout._id" : {$exists: true},
                "workout.start_date": {$gte: start, $lte: end}
            }
        },
        {
            $unwind: "$workout.exercise_log"
        },
        {
            $replaceRoot: 
            {
                newRoot:
                {
                    start: "$workout.start_date",
                    end: "$workout.end_date",
                    name: "$workout.exercise_log.exercise",
                    set: "$workout.exercise_log.set",
                    reps: "$workout.exercise_log.repetitions",
                    weight: "$workout.exercise_log.weight",
                    muscle: "$workout.exercise_log.muscle_group"
                }
            }
        }
    ]).then(function(workout) {
        console.log('workout', workout)
        res.status(200).json(workout)
    }).catch(function(error) {
        console.log('error', error)
        next(error)
    })
}
