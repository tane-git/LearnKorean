import request from 'superagent'

// Example API
export function exampleAPI (input) {
  return request.post('/api/v1/exampleRoute')
    .send({ input })
    .then(res => {
      return res.body.translation[0]
    })
}
