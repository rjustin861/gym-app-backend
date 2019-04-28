const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true}, function() {
	console.log('Connected to MongoDB');
})

module.exports = mongoose;
