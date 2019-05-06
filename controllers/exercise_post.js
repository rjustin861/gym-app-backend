const db_exercise = require('../models/exercise');

module.exports = function(req, res, next) {
    db_exercise.create(req.body).then(function(new_exercise) {
        res.status(201).json(new_exercise);
    }).catch(function(error) {
        console.log('error',error);
        if(error.name === 'MongoError' && error.code === 11000)
            next(new Error('Exercise name already exists in the database!'));
        else
            next(error);
    });
}