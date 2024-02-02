const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || '8080'

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
// app.use('./routes/index.routes.js')

module.exports = app