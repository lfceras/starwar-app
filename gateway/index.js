const express = require('express')
const morgan = require('morgan')
const {createProxyMiddleware} = require('http-proxy-middleware')
const PORT = 8000

const server = express()

server.use(morgan('dev'))

server.use('/characters', createProxyMiddleware({
  target: "http://characters:8001",
  changeOrigin: true
}))

server.use('/films', createProxyMiddleware({
  target: "http://films:8002",
  changeOrigin: true
}))

server.use('/planets', createProxyMiddleware({
  target: "http://planets:8003",
  changeOrigin: true
}))

server.use('/database', createProxyMiddleware({
  target: "http://database:8004",
  changeOrigin: true
}))

server.listen(PORT, ()=>{
  console.log(`Gateway running on port ${PORT}`);
})