const app = require('./server/app')
const http = require('http')

const port = process.env.PORT || 3000
console.log('port', process.env.PORT)

const server = http.createServer(app)
server.listen(port, ()=>{
    console.log(`link: http://localhost:${port}`)
})
