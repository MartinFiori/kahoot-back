const app = require('./app')
const http = require('http')
const socketServer = require('./socket')


const server = http.createServer(app)
const io = socketServer(server)

