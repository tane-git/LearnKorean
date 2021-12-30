// this file sets up a file that contains the google secrets requried to use the translation api

// set variable GOOGLE_SECRETS to be equal to the environment variable GOOGLE_SECRETS
const GOOGLE_SECRETS = process.env.GOOGLE_SECRETS

// create a json file which contains the google secrets
const fs = require('fs')

function setSecrets () {
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
}

module.exports = setSecrets
