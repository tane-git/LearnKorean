const express = require('express')

const router = express.Router()

module.exports = router

// Imports the Google Cloud client library
const { Translate } = require('@google-cloud/translate').v2

// Instantiates a client
const translate = new Translate()

router.post('/', (req, res) => {
  const input = req.body.input

  // Two way translation
  translate.detect(input)
    .then(result => {
      return result[0].language
    })
    .then(language => {
      return language === 'en' ? translate.translate(input, 'ko') : translate.translate(input, 'en')
    })
    .then(translation => {
      res.send({ translation })
      return null
    })
    // .catch(console.log('google api not working...'))
    .catch(err => console.error(err))

  // One way translation
  // translate.translate(input, 'ko')
  //   .then(translation => {
  //     console.log('TCL: translation', translation)
  //     res.send({ translation })
  //     return null
  //   })
  //   .catch(console.log('google api not working...'))
})
