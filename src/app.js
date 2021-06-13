const express = require('express')
const cors = require('cors')

const studios = require('./routes/studios.routes')
//const titles = require('./routes/titles.routes')

const app = express()

app.use(cors())
app.use(express.json())

// definicao da rota raiz
app.use('/studios', studios)
//app.use('/titles', titles)

module.exports = app
