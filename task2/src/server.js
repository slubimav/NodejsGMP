const express = require('express')

const router = require('./router')
const server = express()
server.use('/', router)

const SERVER_PORT = process.env.PORT || 3000

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

module.exports = server