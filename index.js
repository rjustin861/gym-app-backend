const express = require('express')
const body_parser = require('body-parser')
const cors = require('cors')

const app = express()
require('dotenv').config()

// middleware
/*========= Here we want to let the server know that we should expect and allow a header with the content-type of 'Authorization' ============*/
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	res.header("Access-Control-Expose-Headers", "access-token")
	next()
});
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
