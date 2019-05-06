// Import db.js
const db = require('../db')

// Create schema for message
const db_exercise = db.model('exercise', {
	__v: {
		type: Number,
		select: false
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    muscle_group: {
        type: [String],
        required: true
    },
    __v: {
		type: Number,
		select: false
	}
})

// Export
module.exports = db_exercise
