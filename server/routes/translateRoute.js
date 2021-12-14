const express = require('express')

const router = express.Router()

module.exports = router

// following this https://www.youtube.com/watch?v=Sjl9ilOpHG8

const { Translate } = require('@google-cloud/translate').v2

// const GOOGLE = process.env.KEY_PATH

// Configuration for the client
// const translate = new Translate({
//   credentials: GOOGLE_APPLICATION_CREDENTIALS,
//   projectId: GOOGLE_APPLICATION_CREDENTIALS.project_id
// })
// following googles docs
const translate = new Translate()

// const detectLanguage = async (text) => {
//   try {
//     const response = await translate.detect(text)
//     return response[0].language
//   } catch (error) {
//     console.log(`Error at detectLanguage --> ${error}`)
//     return 0
//   }
// }

// detectLanguage('Oggi è lunedì')
//   .then((res) => {
//     console.log(res)
//     return null
//   })
//   .catch((err) => {
//     console.log(err.message)
//   })

const translateText = async (text, targetLanguage) => {
  try {
    const [response] = await translate.translate(text, targetLanguage)
    return response
  } catch (error) {
    console.log(`Error at translateText --> ${error}`)
    return 0
  }
}

// translateText('Oggi è lunedì', 'en')
//   .then((res) => {
//     console.log(res)
//     return null
//   })
//   .catch((err) => {
//     console.log(err)
//   })

router.get('/', (req, res) => {
  translateText('Hello', 'ko')
    .then((translation) => {
      console.log('translation: ', translation)
      // res.send(translation)
      return null
    })
    .catch(err => console.error(err.message))
})
