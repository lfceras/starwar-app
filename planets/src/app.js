const express = require('express')
const morgan = require('morgan')
const app = express()
const handlers = require('./utils/errors/handlers')

app.use(express.json())
app.use(morgan('dev'))

app.use('/planets' ,require('./routes'))

app.use('*', handlers.notFoundHandler)

app.use(handlers.errorHandler)

module.exports = app