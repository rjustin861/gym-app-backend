// Import db.js
const db = require('../db')
// Import mongoose from node_modules
const mongoose = require('mongoose')

let schema = mongoose.Schema
let ObjectId = schema.Types.ObjectId

var exercise_log = new Schema (
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
		}
	}
)

var workout = new Schema (
	{
		start_date: {
			type: Date
		},
		end_date: {
			type: Date
		},
		exercise_log: [exercise_log]
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
	workout: [workout]
})

// Export
module.exports = db_user
