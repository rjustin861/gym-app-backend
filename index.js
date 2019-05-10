const express = require('express')
const body_parser = require('body-parser')
const cors = require('cors')

const app = express()
require('dotenv').config()

// middleware
app.use(body_parser.json())
app.use(body_parser.urlencoded({ // understands form submits
	extended: true
}))
app.use(cors())

// Auth
require('./auth.js')(app)

// Routes
require('./routes-api.js')(app)

// Errors
app.use(function(err, req, res, next) {
	console.log('err', err);
	res.status(400).json({
		message: err.message
	})
})

app.listen(process.env.PORT, function() {
	console.log(`Server ready on port ${process.env.PORT} or default`)
})
