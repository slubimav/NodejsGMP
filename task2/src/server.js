import express from 'express'
import router from './router.js'

const server = express()
server.use('/', router)

const SERVER_PORT = 3000

const startServer = async () => {
      try{
            await server.listen(SERVER_PORT, () => { 
            console.log(`🚀  Express server running on PORT:${SERVER_PORT}\nOpen http://localhost:3000`)})
      } catch(error){
            console.log(`❌  Express server are failed to start!\nError: ${error}`)
      }
    }
    
startServer()