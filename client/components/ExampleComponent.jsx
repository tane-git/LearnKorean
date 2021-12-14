// React and Redux imports
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Import Actions
import { exampleAction } from '../actions/exampleAction'

// Import components

// Import react-bootstrap
import Button from 'react-bootstrap/Button'

function ExampleComponent () {
  // Redux state to hold the translation
  const translation = useSelector(state => state.exampleReducer)

  // Local state to hold the current user input for what they want translated
  const [input, setInput] = useState('')

  // Redux dispatch to dispatch actions
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(exampleAction())
  // }, [])

  function handleTranslate () {
    dispatch(exampleAction(input))
    console.log('dispatching input: ', input)
  }

  function handleChange (event) {
    setInput(event.target.value)
  }

  return (
    <div className='example-component'>
      <h1>Example Component</h1>
      {translation}
      <input type='text' onChange={(e) => handleChange(e)} value={input} />
      <Button onClick={handleTranslate} variant="outline-primary">Translate!</Button>
    </div>
  )
}

export default ExampleComponent
