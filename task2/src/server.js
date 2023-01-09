const express = require('express')
const server = express()

const SERVER_PORT = process.env.PORT || 3000

server.get('/', (request, response) =>{
      response.send('Hello world!')
})

const startServer = async () => {
      try{
            await server.listen(SERVER_PORT, () => { 
            console.log(`🚀  Express server running on PORT:${SERVER_PORT}\nOpen http://localhost:3000`)})
      } catch(error){
            console.log(`❌  Express server are failed to start!\nError: ${error}`)
            process.exit(1)
      }
    }
    
startServer()