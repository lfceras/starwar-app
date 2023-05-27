const express = require('express')
const morgan = require('morgan')
const handlers = require('./utils/errors/handlers')

const server = express()

server.use(express.json())
server.use(morgan('dev'))

server.use( require('./routes'))

server.use('*', handlers.notFoundHandler)

server.use(handlers.errorHandler)

module.exports = server