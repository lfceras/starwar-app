const express = require('express')
const morgan = require('morgan')
const handlers = require('./utils/errors/handlers')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/characters',require('./routes'))

app.use('*', handlers.notFoundHandler)

app.use(handlers.errorHandler)

module.exports = app
