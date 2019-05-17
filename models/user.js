// Import db.js
const db = require('../db')
// Import mongoose from node_modules
const mongoose = require('mongoose')

let schema = mongoose.Schema

const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const exercise_log = new schema(
	{
		exercise: {
			type: String,
		},
		repetitions: {
			type: Number
		},
		set: {
			type: Number
		},
		weight: {
			type: Number
		},
		duration: {
			type: Number
		},
		muscle_group: {
			type: [String]
		},
		__v: {
			type: Number,
			select: false
		}
	}
)

const workout = new schema(
	{
		start_date: {
			type: Date
		},
		end_date: {
			type: Date
		},
		exercise_log: {
			type: [exercise_log]
		},
		__v: {
			type: Number,
			select: false
		}
	}
)

const point = new schema({
	type: {
	  type: String,
	  enum: ['Point'],
	  required: true
	},
	coordinates: {
	  type: [Number],
	  required: true
	}
  });

// Create schema for user
const user = new schema({
	__v: {
		type: Number,
		select: false
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		validate: [validateEmail, 'Please fill up a valid email address']
	},
	password: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		required: true,
		default: Date.now
	},
	workout: {
		type: [workout]
	}, 
	location: {
		type: point
	}
});

user.index({location: '2dsphere'})

const db_user = db.model('user', user)

// Export
module.exports = db_user
