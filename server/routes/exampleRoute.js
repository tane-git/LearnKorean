const express = require('express')

const router = express.Router()

module.exports = router

// Imports the Google Cloud client library
const { Translate } = require('@google-cloud/translate').v2

// Instantiates a client
const translate = new Translate()

router.post('/', (req, res) => {
  const input = req.body.input

  translate.translate(input, 'ko')
    .then(translation => {
      console.log('TCL: translation', translation)
      res.send({ translation })
      return null
    })
    .catch(console.log('google api not working...'))
})
