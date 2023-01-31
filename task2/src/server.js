import express from 'express'
import router from './router.js'
import * as dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 3000

const startServer = () => {
      const server = express()
      server.use('/', router)
      server.use(function (error, req, response, next){
            if (error.type === 'entity.parse.failed') {
                  response.status(400).send('Not valid body in request.')
            } else {
                  response.status(400).send(`Error in request:\n${error}`)
            }
            next()
      })
      server.listen(PORT, () => { 
            console.log(`🚀  Express server running on PORT:${PORT}\nOpen http://localhost:${PORT}`)})

      process.on('uncaughtException', err => {
            console.error(`❌ UncaughtException error: '${err.message}'. ${err.stack}`);
            process.exit();
            });
              
      process.on('unhandledRejection', err => {
            console.error(`❌ UnhandledRejection error: '${err.message}'. ${err.stack}`);
            process.exit();
            });
      }
    
startServer()