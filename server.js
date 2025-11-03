const express = require('express');
const http = require("http")
const path = require('path');
const socketIO = require("socket.io")
const port = 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket)=>{
    console.log('Player connected', socket.id);
})

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public'))
})
server.listen(port, ()=>[
    console.log('Servidor ejecutandose: http://localhost:'+port)
])