const passport = require('passport')

module.exports = function(app){

	// ### API ###

	//Auth
	app.post('/api/signup', require('./controllers/signup'))
	app.post('/api/login', require('./controllers/login'))

	//Exercise
	app.get('/api/exercises', passport.authenticate('jwt', {session: false}), require('./controllers/exercises_get'))
	app.get('/api/exercise', passport.authenticate('jwt', {session: false}), require('./controllers/exercise_get'))
	app.post('/api/exercise', passport.authenticate('jwt', {session: false}), require('./controllers/exercise_post'))

	//Users
	app.get('/api/users', passport.authenticate('jwt', {session: false}), require('./controllers/users_get'))
	app.get('/api/user/:id', passport.authenticate('jwt', {session: false}), require('./controllers/user_get'))
	app.post('/api/user', passport.authenticate('jwt', {session: false}), require('./controllers/user_post'))
	app.patch('/api/user', passport.authenticate('jwt', {session: false}), require('./controllers/user_update'))
	
	//Locations
	app.get('/api/users/location', passport.authenticate('jwt', {session: false}), require('./controllers/users_location_get'))

	//Workout
	app.get('/api/workouts', passport.authenticate('jwt', {session: false}), require('./controllers/workouts_get'))
	app.post('/api/workout', passport.authenticate('jwt', {session: false}), require('./controllers/workout_post'))
}
