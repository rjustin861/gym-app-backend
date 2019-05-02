// Import db_user
const db_user = require('../models/user')

module.exports = function(req, res, next) {

    // this is just temporary
    req.params.id = '5cc94f1112c41412abe3a553'

	db_user
	.findById(req.params.id)
	.then(function(user) {
		res.status(200).json(user)
	})
}
