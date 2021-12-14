// import api's and other actions
import { exampleAPI } from '../api/exampleAPI'
// import { showError } from './error'

// export action types
export const EXAMPLE_ACTION = 'EXAMPLE_ACTION'
export const EXAMPLE_ACTION_SUCCESS = 'EXAMPLE_ACTION_SUCCESS'
export const EXAMPLE_ACTION_PENDING = 'EXAMPLE_ACTION_PENDING'

export function exampleActionPending () {
  return {
    type: EXAMPLE_ACTION_PENDING
  }
}

export function exampleActionSucess (example) {
  return {
    type: EXAMPLE_ACTION_SUCCESS,
    example
  }
}

export function exampleAction (input) {
  return (dispatch) => {
    dispatch(exampleActionPending())
    return exampleAPI(input)
      .then((example) => {
        dispatch(exampleActionSucess(example))
        return null
      })
      .catch((err) => {
        // if the error is from our routes, this will use the message our route
        // sends back, rather than the generic 'Internal Server Error' from a
        // status 500
        // if the error is from elsewhere in the Promise chain, there won't be
        // an err.response object, so we use err.message
        // const errMessage = err.response?.text || err.message
        // dispatch(showError(errMessage))

        // just doing a standard err message
        console.log('action example error: ', err.message)
      })
  }
}
