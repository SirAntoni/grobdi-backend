const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '2kb' }))

var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.get('/', function(req, res) {
    res.send('Hola Mundo')
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})