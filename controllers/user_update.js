// Import db_user
const db_user = require('../models/user')

module.exports = function(req, res, next) {
	db_user.findByIdAndUpdate(
		req.user._id,
		req.body, 
		{
			new: true
		})
        .then(function(location_updated) {
			res.status(200).json(location_updated)
			console.log('user', req.user._id)
			console.log('location', req.body)
	})
}
