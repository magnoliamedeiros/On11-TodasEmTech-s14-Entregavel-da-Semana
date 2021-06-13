const mongoose = require('mongoose')
const Studio = require('../models/studio')

const registerStudio = async (req, res)=>{

    // Registrando um estudio
    const studio = new Studio({
        _id: new mongoose.Types.ObjectId(),
        nameStudio: req.body.nameStudio,
        descriptionStudio: req.body.descriptionStudio, 
        created_at: req.body.created_at
    })

    // Salvando estudio no banco
    try {
        const newStudio = await studio.save()
        res.status(201).json([{
            message: 'Studio successfully added',
            newStudio
        }])
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {
    registerStudio
}