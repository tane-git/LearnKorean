import React from 'react'
import { Route } from 'react-router-dom'
// import ErrorMessage from './ErrorMessage.jsx'

// import Components
import ExampleComponent from './ExampleComponent.jsx'

function App () {
  return (
    <div className='app'>
      <Route path='/' component={ExampleComponent} />
      {/* <Route path='/' component={ErrorMessage} /> */}
      {/* <Route path='/' component={} /> */}
    </div>
  )
}

export default App
