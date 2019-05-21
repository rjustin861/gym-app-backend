const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_PROD_URL, {useNewUrlParser: true}, function() {
	console.log('Connected to MongoDB');
})

module.exports = mongoose;
