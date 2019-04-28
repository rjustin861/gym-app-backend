const express = require('express')
const body_parser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
// const connect_mongodb = require('connect-mongodb-session')(session)

const app = express()
require('dotenv').config()

// middleware

app.use(body_parser.json())
app.use(body_parser.urlencoded({ // understands form submits
	extended: true
}))
app.use(cors())


// Routes
require('./routes-api.js')(app)

// Static
// app.use(express.static(__dirname + '/client'))

// Errors
app.use(function(err, req, res, next) {
	console.log('err', err);
	res.status(400).json({
		message: err.message
	})
})

app.listen(process.env.PORT, function() {
	console.log(`Server ready on port ${process.env.PORT} or default`);
})
