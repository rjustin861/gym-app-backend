const passport = require('passport')
const passport_local = require('passport-local').Strategy
const passportJWT = require("passport-jwt")
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt
// const passport_google = require('passport-google-oauth20')
const bcrypt = require('bcrypt')
const db_user = require('./models/user')

module.exports = function(app) {

	app.use(passport.initialize())
	app.use(passport.session())

	passport.use(new passport_local({
		usernameField: 'email',
		passwordField: 'password'
	}, function(email, password, done) {
		db_user.findOne({
			email: email
		})
		.then(function(user) {
			if (!user) { // if user not found
				return done(null, false) // error, user
			}
			if (!bcrypt.compareSync(password, user.password)) {
				return done(null, false)
			}
			return done(null, user) // error, user
		})
		.catch(function(err) {
			console.log('err', err)
			return done(err)
		})
	}))

	passport.use(new JWTStrategy({
		jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
		secretOrKey   : process.env.SESSION_SECRET
	}, function (jwtPayload, done) {
			return db_user.findById(jwtPayload._id)
				.then(function(user) {
						return done(null, user)
				})
				.catch(function(err) {
						console.log('err', err)
						return done(err)
				})
	}))

}