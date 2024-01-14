const express = require('express')
const router = require('./routes')
const cors = require('cors')
require('./db.js')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '2kb' }))

var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use('/', router)

app.get('/', function(req, res) {
    res.send('Hola Mundo')
})

module.exports = app