const express = require('express')
const controller = require('../controllers/studioController')

const router = express.Router()

router.get('/all', controller.allStudio)

router.post('/register', controller.registerStudio)

module.exports = router