const express = require('express')

const router = express.Router()

module.exports = router

// router.get('/', (req, res) => {
//   res.send('Hello World!')
// })

const projectId = 'YOUR_PROJECT_ID'

// Imports the Google Cloud client library
const { Translate } = require('@google-cloud/translate').v2

// Instantiates a client
const translate = new Translate({ projectId })

async function quickStart () {
  // The text to translate
  const text = 'Hello, world!'

  // The target language
  const target = 'ko'

  const [translation] = await translate.translate(text, target)
  // console.log(`Text: ${text}`)
  // console.log(`Translation: ${translation}`)

  return translation
}

router.get('/', (req, res) => {
  quickStart()
    .then(translation => {
      res.send(translation)
      return null
    })
    .catch(err => {
      console.error('ERROR:', err)
    })
})
