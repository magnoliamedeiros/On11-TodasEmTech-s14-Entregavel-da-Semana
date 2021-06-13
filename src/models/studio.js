const mongoose = require('mongoose')

const studioSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nameStudio: {
        type: String,
        required: true
    },
    descriptionStudio: {
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