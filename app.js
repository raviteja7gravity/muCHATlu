import { createServer } from "http"
import {Server } from "socket.io"
const httpServer = createServer()
const io = new Server(httpServer, {
   cors:{
    origin : process.env.NODE_ENV === "production" ? false : ["http://localhost:3000"]
   } 
})
io.on('connection',socket => {
socket.on('message', message => {
   io.emit('message', `${socket.id.substring(0,5)} : ${message}`)
})
} )

httpServer.listen(5000, ()=>{console.log("Listening on 5000")})