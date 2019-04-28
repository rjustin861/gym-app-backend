// Import db.js
const db = require('../db')
// Import mongoose from node_modules
const mongoose = require('mongoose')

let schema = mongoose.Schema
let ObjectId = schema.Types.ObjectId

// Create schema for user
const db_user = db.model('user', {
	__v: {
		type: Number,
		select: false
	},
	name: [
		{
			first_name: {
				type: String,
				required: true
			},
			last_name: {
				type: String,
				required: true
			}
		}
	],
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
	}
})

// Export
module.exports = db_user
