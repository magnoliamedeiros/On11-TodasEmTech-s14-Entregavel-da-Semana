const express = require('express')
const router = express.Router()

router.post('/register', controller.registerStudio)

module.exports = router