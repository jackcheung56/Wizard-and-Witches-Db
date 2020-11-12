const routes = require('./routes/AppRouter')
const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 3000

const app = express()


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/hp', routes)


db.on('error', console.error.bind(console, 'MongoDB Connection Error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))