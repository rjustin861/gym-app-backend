// Import db.js
const db = require('../db')
// Import mongoose from node_modules
const mongoose = require('mongoose')

let schema = mongoose.Schema
let ObjectId = schema.Types.ObjectId

var muscle_group = new schema (
    {
        name: {
            type: String
        },
        __v: {
            type: Number,
            select: false
        }
    }
)

// Create schema for message
const db_exercise = db.model('exercise', {
	__v: {
		type: Number,
		select: false
    },
    name: {
        type: String,
        required: true
    },
    muscle_group: {
        type: [muscle_group],
        required: true
    },
    __v: {
		type: Number,
		select: false
	}
})

// Export
module.exports = db_exercise
