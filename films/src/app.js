const express = require('express')
const morgan = require('morgan')
const handler = require('./utils/errors/handlers')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/films',require('./routes'))

app.use('*', handler.notFoundHandler)

app.use(handler.errorHandler)

module.exports = app
