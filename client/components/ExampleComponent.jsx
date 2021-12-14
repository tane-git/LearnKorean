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

  useEffect(() => {
    // dispatch(exampleAction())
    setInput(translation)
  }, [translation])

  // code to make user's keyboard enter button submit the form
  useEffect(() => {
    const listener = event => {
      if (event.code === 'Enter') {
        console.log('enter button pressed and input: ', input)
        console.log('input: ', input)
        dispatch(exampleAction(input))
        event.preventDefault()
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [input])

  function handleTranslate () {
    dispatch(exampleAction(input))
  }

  function handleChange (event) {
    setInput(event.target.value)
  }

  return (
    <div className='example-component'>
      <h1>Example Component</h1>
      <input type='text' onChange={(e) => handleChange(e)} value={input} />
      <Button onClick={handleTranslate} variant="outline-primary">Translate!</Button>
    </div>
  )
}

export default ExampleComponent
