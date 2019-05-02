const passport = require('passport')

module.exports = function(app){

	// ### API ###

	//Auth
	app.post('/api/signup', require('./controllers/signup'))
	app.post('/api/login', require('./controllers/login'))



	//users
	app.get('/api/users', require('./controllers/users_get'))
	app.get('/api/user/:id', require('./controllers/user_get'))
	app.post('/api/user', require('./controllers/user_post'))

	// workout
	// app.patch('/api/users/:id', require('./controllers/workout_patch'))
	app.post('/api/workout', require('./controllers/workout_post'))
}
