const express = require('express')

const router = express.Router()

module.exports = router

// Imports the Google Cloud client library
const { Translate } = require('@google-cloud/translate').v2

// Instantiates a client
const translate = new Translate()
console.log('translate client: ', translate)

router.get('/', (req, res) => {
  translate.translate('hello', 'ko')
    .then(translation => {
      res.send(translation)
      return null
    })
    .catch(err => console.error(err))
})
