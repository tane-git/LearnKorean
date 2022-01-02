import React from 'react'
import voiceToTextAPI from '../api/external/voiceToText'

export default function voiceToText () {
  // return an html button that will trigger the voice to text function
  return (
    <button onClick={voiceToTextAPI}>Speak</button>
  )
}
