const passport = require('passport')

module.exports = function(app){

	// ### API ###

	//Auth
	app.post('/api/signup', require('./controllers/signup'))



	//users
	app.get('/api/users', require('./controllers/users_get'))
	app.post('/api/users', require('./controllers/user_post'))
}
