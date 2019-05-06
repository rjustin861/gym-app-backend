const db_exercise = require('../models/exercise');

module.exports = function(req, res, next) {

    const query = req.query.search;

    db_exercise.find({"name": { $regex: query, $options: 'i' } }).then(function(exercises) {
        res.status(200).json(exercises);
    }).catch(function(error) {
        console.log('error',error);
        next(error);
    });
}