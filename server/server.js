// external requries
const path = require('path')
const express = require('express')

// setting up the dotenv
require('dotenv').config({ path: path.join(__dirname, '.env') })

// internal requires
const exampleRoute = require('./routes/exampleRoute')
const translateRoute = require('./routes/translateRoute')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// tell server about our routes
server.use('/api/v1/exampleRoute', exampleRoute)
server.use('translate', translateRoute)

// For the client side BrowserRouter - because there is no '#' to distinguish
// between client and server side routes, this sends back the index.html
// (which contains the bundle.js) if none there is no server side route match.
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
