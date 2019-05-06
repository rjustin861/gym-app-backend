const db_exercise = require('../models/exercise');

module.exports = function(req, res, next) {
    db_exercise.find({}).then(function(exercises) {
        res.status(200).json(exercises);
    }).catch(function(error) {
        console.log('error',error);
        next(error);
    });
}