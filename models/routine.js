// Import db.js
const db = require('../db')
// Import mongoose from node_modules
const mongoose = require('mongoose')

let schema = mongoose.Schema
let ObjectId = schema.Types.ObjectId

// Create schema for message
const db_routine = db.model('routine', {
	__v: {
		type: Number,
		select: false
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    }, 
    set: {
        type: Number,
        required: true
    }, 
    repetition: {
        type: Number,
        required: true
    }, 
    weight: {
        type: Number,
        required: true
    }
})

// Export
module.exports = db_routine
