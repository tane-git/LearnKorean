// external requries
const path = require('path')
const express = require('express')

// setting up the dotenv
require('dotenv').config({ path: path.join(__dirname, '.env') })

// internal requires
const exampleRoute = require('./routes/exampleRoute')
// const { setSecrets } = require('./setSecrets.js')
const setSecrets = require('./setSecrets.js')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// tell server about our routes
server.use('/api/v1/exampleRoute', exampleRoute)

// For the client side BrowserRouter - because there is no '#' to distinguish
// between client and server side routes, this sends back the index.html
// (which contains the bundle.js) if none there is no server side route match.
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

// call serverSects.js to set up the google secrets
setSecrets()

// coding in place to set secrets
// const GOOGLE_SECRETS = process.env.GOOGLE_SECRETS
// const fs = require('fs')
// fs.writeFile(
//   'server/serverSecrets.json',
//   GOOGLE_SECRETS,
//   (err) => {
//     if (err) {
//       console.error(err)
//     }
//   }
// )

module.exports = server
