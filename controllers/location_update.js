// Import db_user
const db_user = require('../models/user')

module.exports = function(req, res, next) {
	db_user.findByIdAndUpdate(
		req.params.id,
        req.body)
        .then(function(location_updated) {
		res.status(200).json(location_updated)
	})
}
