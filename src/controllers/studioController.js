const mongoose = require('mongoose')
const Studio = require('../models/studio')

const registerStudio = async (req, res)=>{

    // Registrando um novo estudio
    const studio = new Studio({
        _id: new mongoose.Types.ObjectId(),
        nameStudio: req.body.nameStudio,
        descriptionStudio: req.body.descriptionStudio, 
        created_at: req.body.created_at
    })
    
    const fieldName = await Studio.findOne({
       nameStudio: req.body.nameStudio
    })

    const fieldDescription = await Studio.findOne({
        descriptionStudio: req.body.descriptionStudio
    })

    // Verifica se o estúdio já existe
    if (fieldName) {
        return res.status(400).json({
            error: 'studio already registered'
        })
    }
    
    // Verifica se há campo vazio 
    if (fieldName == null || fieldDescription == null) {
       return res.status(400).json({
           error: 'empty field is not allowed'
       })
    }

    // Salvando estudio no banco
    try {
        const newStudio = await studio.save()
        res.status(201).json([{
            message: 'studio successfully added',
            newStudio
        }])
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const allStudio = async (req, res)=>{
    try {
        const studios = await Studio.find()
        res.status(200).json(studios)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    registerStudio,
    allStudio
}