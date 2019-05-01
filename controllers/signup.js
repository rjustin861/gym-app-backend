const db_user = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = function(req, res, next) {

	// transform email to lowercase

	if (req.body.email) {
		req.body.email = req.body.email.toLowerCase()
	}
	req.body.password = bcrypt.hashSync(req.body.password, 10)

	// if email is taken, reject, otherwise create the user

	db_user.findOne({
		email: req.body.email
	}).then(function(user) {
		// make sure email is unique
		if (user) {
			return next({
				message: 'User already exists'
			})
		}
		// if email does not exist, create the user
		db_user.create(req.body).then(function(user) {
			// res.redirect('/')
			res.status(200).json(user)
		}).catch(next)
	}).catch(next)

	// save to database

	// res

}