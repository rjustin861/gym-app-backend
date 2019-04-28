// Import db.js
const db = require('../db')
// Import mongoose from node_modules
const mongoose = require('mongoose')

let schema = mongoose.Schema
let ObjectId = schema.Types.ObjectId

// Create schema for message
const db_training = db.model('training', {
	__v: {
		type: Number,
		select: false
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    }, 
    start_date: {
        type: Date
    }, 
    end_date: {
        type: Date
    }
})

// Export
module.exports = db_training
