const http = require('node:http')
const { findAvailablePort } = require('./10.1.free-port')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('Request received')
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    const { port } = server.address()
    console.log(`server listening on port http://localhost:${port}`)
  })
})
