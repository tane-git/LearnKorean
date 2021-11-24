// Imports the Google Cloud client library
const { Translate } = require('@google-cloud/translate').v2

// Creates a client
const translate = new Translate()

// import translateText from '../google'
const request = require('superagent')
// const { translateText } = require('../google')
const express = require('express')

// import internal db functions
// const db = require('../db/db')

const router = express.Router()

module.exports = router

// router.get('/', (req, res) => {
//   console.log('example route')
//   // this is not working
//   // translateText()
//   //   .then((translation) => {
//   //     res.send(translation)
//   //     return null
//   //   })
//   //   .catch((err) => {
//   //     console.log(err)
//   //   })
//   res.send('Hello World!')
// })

// try a REST API
// call the google translate api
// router.post('/', (req, res) => {
//   request.post('https://translation.googleapis.com/language/translate/v2')
//     .set('key', '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDuoHsKd+kTTh23\nMoJ1JH91Tc/mxAJjfTLvE6u4I3FcSVmJ+TddgHaVQ+9eog4ugmuALBtY1FQiSpAZ\nkqjNptHeFntmSBC1Yt5jAsRpPiPwh1OpYqCmf06gVpxg/5LGKwwSDwWT5atzkExR\n8lYmMSYtbMgB0BoSUH7+m4rX9rmhseIE+KF41WqKGikar7ay0soxvz15OSYSEpGs\nuCeN17FP33LM5zujtl2zXMZxMfONgacfjaGWN7jOx0gzC4dY4X73Y0Jj5GcDKqHD\nkOADxhrtqSxzOdS/N6iDMs9KRbMxyBxymF/W9SvkgvxxUquZD0u2rl/a6aQIgcvX\n529Aej7JAgMBAAECggEAIGhaHXtYg58tyPYKoqcgykkVjaUcH+/ebXqx7RGfMSXj\nC6p1evTZ5f6ycRs4Ktfaiq8yzZcUkA2pUVfKJhfcU7mg66yo3EF/q1myXAqs7dsr\nIQt8fvA2OO9aUJAVGmW5P3Cb1NCxvsGfo9dyHMC7CxtFdH2TNN6KyMBOFHN1FYDk\naifV/RtZaoZgPsNb+6xFF6H9QzectWoSA5jBzl8lPb36VV+uN7ObhnZaaQlGiJZH\nxVRUiHJOJwCRly+FdfYTHXnX/L5aT+T3BWXhQHxFjuueV9U6oBu0ZrE9UDDRRh/m\nF9RMyUkV3mQedyXAlGhJ7iQc4U+l1mZyrPFsjfvyKQKBgQD6I3I45BcoMabGCf58\nvLzS5JNLXRoJTwwnHji9U4P+UhimulsIsGTGf026OBcM/jQrsmF/EeJpKb5H/REm\nrNYBwRyfIisTZw4N4/iScB9GbHoApH9yJpqrYsOdGFHwvdd48Unfv907gnSn/wpZ\nl90pP4jvH3Ol2/U5g+fJ2esW1QKBgQD0N/pJxzJ5HOAWOO2MbBc9Ao9ARAwhm4a2\njnm8tvwV6JYza412Qgg5vOKZXQ2CfB+cMrW5T3VKxmSp/Pe6LmUrDPlpYlwIuD9p\nTxhoFdC8VrJzHGnO8ury9k7H2Rntp92XedEt2yCmSqwnSB/5eCWKlmGJ8dmQaks4\nnwl0Qz0qJQKBgQDJEAr1TeqLRXXfxBLKo09IWbFIJ9sQ1nhXTUSgcmwr1kO4aR1Z\nm6g1ogiRghqNOBwpb6ZM5MxQadxoszPBGbagDGD8TRPA8dprMe8RjoylJ/bdY1yK\nHhu/XZENSoo67+4uag1OjEPBXPh2PVxNbfO4/zgLtgVYsbio9a0wJDmCzQKBgFP7\ngAWpC7Fcfa8GqqH0ddVUMQDvpaBVBHF482IzJuM91ZEfNklpkbyROPd2aXPqzVAA\nnD96lKI/MVTHmkUbOU0hrA9SdMXG3n+PZJw+jEaIJdux9KznGmaszxColuMELA6w\nJH/5b/Pfj+3+PoiiiX5sEmTGl4OzGeUBw9WIXdtFAoGAKJolASmMD7E7AypZbCGV\nHGckKLavFyEFXBi0fvjTQ+zpN1hBmnSGnyr/HNNmExJ2b8ytxST7ZxYNM+3xlEZn\nkCZ2VxyVkSb1I4U9EhxQNP5mQMK2OvAJlh8N4teOQwd5cYf+NjlWlo3nRfa1NvNv\nkZozIjA5KpryXxiguOaHSOE=\n-----END PRIVATE KEY-----\n')
//     .send({
//       q: 'The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza pyramid complex.',
//       source: 'en',
//       target: 'es',
//       format: 'text'
//     })
//     .then((response) => {
//       console.log(response.body)
//       return null
//     })
//     .catch(err => console.error(err))
// })

// const text = 'Hello'
// const target = 'ko'

// async function translateText () {
//   console.log('translating')
//   // Translates the text into the target language. "text" can be a string for
//   // translating a single piece of text, or an array of strings for translating
//   // multiple texts.
//   let [translations] = await translate.translate(text, target)
//   translations = Array.isArray(translations) ? translations : [translations]
//   console.log('Translations:')
//   translations.forEach((translation, i) => {
//     console.log(`${text[i]} => (${target}) ${translation}`)
//   })
// }

router.get('/', (req, res) => {
  translate.translate('hello', 'ko')
    .then(translation => {
      console.log(translation)
      res.send(translation)
      return null
    })
    .catch(err => console.error(err))
})
