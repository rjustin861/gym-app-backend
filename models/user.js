// Import db.js
const db = require('../db')
// Import mongoose from node_modules
const mongoose = require('mongoose')

let schema = mongoose.Schema

var exercise_log = new schema (
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

var workout = new schema (
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

// Create schema for user
const db_user = db.model('user', {
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
		validate: [
			{
				validator: function(email) {
					return email.length > 6
				},
				message: 'email must be 7 characters minimum'
			}
		]
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
	}
})

// Export
module.exports = db_user
