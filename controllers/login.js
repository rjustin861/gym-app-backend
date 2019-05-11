const passport = require('passport')
const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {

	passport.authenticate('local', {session: false}, function(err, user) {
		if (err) {
			return next(err)
		}
		if (!user) {
			return next({
				message: 'Email or password is not valid'
			})
		}
		req.login(user, {session: false}, function(err) {
			if (err) {
				return next(err)
			}

			const token = jwt.sign(user.toJSON(), process.env.SESSION_SECRET, { expiresIn: '7d' })
			res.setHeader('access-token', token)
			return res.status(200).json(user)
		})
	})(req, res, next)

}