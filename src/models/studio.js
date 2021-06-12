const mongoose = require('mongoose')

const studioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: new Date()
    }
})

module.exports = mongoose.model('studio', studioSchema)