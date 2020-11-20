const routes = require('./routes/AppRouter')
const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 3001

const app = express()


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'client', 'build')))


app.use('/hp', routes)
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
)

db.on('error', console.error.bind(console, 'MongoDB Connection Error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))