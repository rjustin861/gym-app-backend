const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true}, function() {
	console.log('Connected to MongoDB');
})

mongoose.set('debug', function (coll, method, query, doc) {
    console.log(coll + " " + method + " " + JSON.stringify(query) + " " + JSON.stringify(doc));
});

module.exports = mongoose;
