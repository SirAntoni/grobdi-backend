if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const app = require('./src/app')
const port = process.env.PORT

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})