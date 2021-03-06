// this file sets up a file that contains the google secrets requried to use the translation api

// set variable GOOGLE_SECRETS to be equal to the environment variable GOOGLE_SECRETS
const GOOGLE_SECRETS = process.env.GOOGLE_SECRETS

// create a json file which contains the google secrets
const fs = require('fs')

function setSecrets () {
  // read the file serverSecrets.json
  fs.readFile(
    'server/serverSecrets.json',
    (err) => {
      // if there is an error, log it
      if (err) {
        console.log('setting secrets!')
        // create a json file which contains the google secrets
        fs.writeFile(
          'server/serverSecrets.json',
          GOOGLE_SECRETS,
          (err) => {
            if (err) {
              console.error(err)
            }
          }
        )
      } else {
        console.log('secrets already set')
      }
    }
  )
}

module.exports = setSecrets
