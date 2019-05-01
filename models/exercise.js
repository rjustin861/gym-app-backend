// Import db.js
const db = require('../db')
// Import mongoose from node_modules
const mongoose = require('mongoose')

let schema = mongoose.Schema
let ObjectId = schema.Types.ObjectId

var muscle_group = new Schema (
    {
        name: {
            type: String
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
    muscle_group: [muscle_group]
})

// Export
module.exports = db_exercise
