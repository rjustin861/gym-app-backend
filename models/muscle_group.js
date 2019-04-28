// Import db.js
const db = require('../db')
// Import mongoose from node_modules
const mongoose = require('mongoose')

let schema = mongoose.Schema
let ObjectId = schema.Types.ObjectId

// Create schema for message
const db_muscle_group = db.model('muscle_group', {
	__v: {
		type: Number,
		select: false
    },
    name: {
        type: String,
        required: true
    }
})

// Export
module.exports = db_muscle_group
