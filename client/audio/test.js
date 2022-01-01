// this is a file for testing out node-record-lpcm16, seems to work!

// const recorder = require('node-record-lpcm16')
// const fs = require('fs')

// const file = fs.createWriteStream('test.wav', { encoding: 'binary' })

// recorder.record({
//   sampleRate: 44100
// })
// .stream()
// .pipe(file)
console.log('testing audio')

const recorder = require('node-record-lpcm16')
const fs = require('fs')

const file = fs.createWriteStream('test.wav', { encoding: 'binary' })

const recording = recorder.record()
recording.stream().pipe(file)

// // Pause recording after one second
// setTimeout(() => {
//   recording.pause()
// }, 1000)

// // Resume another second later
// setTimeout(() => {
//   recording.resume()
// }, 2000)

console.log('stopping audio?')

// Stop recording after three seconds
setTimeout(() => {
  recording.stop()
}, 3000)

recording.stream()
  .on('error', err => {
    console.error('recorder threw an error:', err)
  })
  .pipe(file)
