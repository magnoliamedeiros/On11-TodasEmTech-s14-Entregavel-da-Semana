const mongoose = require('mongoose')

const titleSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nameTitle: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    descriptionTitle: {
        type: String,
        required: true
    },
    studio: {
        type: mongoose.Schema.Types.ObjectId,
        required: tue,
        ref: 'studio'
    },
    created_at: {
        type: Date,
        required: true,
        default: new Date()
    }
})

module.exports = mongoose.model('title', titleSchema)