// React and Redux imports
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Import Actions
import { exampleAction } from '../actions/exampleAction'

// Import components

function ExampleComponent () {
  const example = useSelector(state => state.exampleReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(exampleAction())
  }, [])

  return (
    <div className='example-component'>
      <h1>Example Component</h1>
      {example}
      <input type='text' />
    </div>
  )
}

export default ExampleComponent
