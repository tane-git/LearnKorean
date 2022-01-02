// Note: Attempting to put the google speech translate on the front end... Not sure if it will work. For example, it uses requires which I think might be a Node.js thing and browser run JS might need to use imports?

// Requires
const path = require('path')
const recorder = require('node-record-lpcm16')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

// Imports the Google Cloud client library
const speech = require('@google-cloud/speech')

export default function voiceToText () {
  // Test set up: User clicks a button and this function is called.
  // This function does everything required to get audio streaming to google speech recognition api.

  // Creates a client
  const client = new speech.SpeechClient()

  // Config request
  const encoding = 'LINEAR16'
  const sampleRateHertz = 16000
  const languageCode = 'en-US'

  const request = {
    config: {
      encoding: encoding,
      sampleRateHertz: sampleRateHertz,
      languageCode: languageCode
    },
    interimResults: true // If you want interim results, set this to true
  }

  // Create a recognize stream
  const recognizeStream = client
    .streamingRecognize(request)
    .on('error', console.error)
    .on('data', data =>
      process.stdout.write(
        data.results[0] && data.results[0].alternatives[0]
          ? `Transcription: ${data.results[0].alternatives[0].transcript}\n`
          : '\n\nReached transcription time limit, press Ctrl+C\n'
      )
    )

  // Start recording and send the microphone input to the Speech API.
  // Ensure SoX is installed, see https://www.npmjs.com/package/node-record-lpcm16#dependencies
  recorder
    .record({
      sampleRateHertz: sampleRateHertz,
      threshold: 0,
      // Other options, see https://www.npmjs.com/package/node-record-lpcm16#options
      verbose: false,
      recordProgram: 'sox', // Try also "arecord" or "sox"
      silence: '10.0'
    })
    .stream()
    .on('error', console.error)
    .pipe(recognizeStream)

  console.log('Listening, press Ctrl+C to stop.')
}
