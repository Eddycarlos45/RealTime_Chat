const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.static(path.join(__dirname, 'public')))

//Run when client connects
io.on('connection', socket => {
    console.log('New WS Connection...')

    socket.emit('message','Welcome to ChatCord!')
})

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));