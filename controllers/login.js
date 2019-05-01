const passport = require('passport')
const passport_local = require('passport-local')
const db_user = require('../models/user')

module.exports = function(req, res, next) {

	//
	passport.authenticate('local', function(err, user) {
		if (err) {
			return next(err)
		}
		if (!user) {
			return next({
				message: 'Email or password is not valid'
			})
		}
		req.logIn(user, function(err) {
			if (err) {
				return next(err)
			}
			// res.redirect('/')
			return res.status(200).json(user)
		})
	})(req, res, next)

}