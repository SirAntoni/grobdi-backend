const express = require('express')
const router = require('./routes')
const cors = require('cors')
const morgan = require('morgan')
require('./db.js')
const { createRoles } = require('./libs/initialSetup')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '2kb' }))
app.use(morgan('dev'))
createRoles()
var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use('/', router)

app.get('/', function(req, res) {
    res.send('Api v1 - GROBDI')
})

module.exports = app