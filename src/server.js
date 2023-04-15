import express from 'express'
import router from './router.js'
import * as dotenv from 'dotenv'
import logger from './helpers/logger.js';
import login from './middleware/jwtauth.js'
dotenv.config()
const PORT = process.env.SERVER_PORT || 3000

const startServer = () => {
      const server = express()
      server.use(express.json())
      server.use('/', login, router)
      server.use(function (error, req, response, next){
            if (error.type === 'entity.parse.failed') {
                  response.status(400).send('Not valid body in request.')
            } else {
                  response.status(400).send(`Error in request:\n${error}`)
            }
            next()
      })
      server.post('/protected', login, (req, res) => {
            res.status(200).send("Here's the info you requested ");
          });
      server.listen(PORT, () => { 
            console.log(`🚀  Express server running on PORT:${PORT}\nOpen http://localhost:${PORT}`)})

      process.on('uncaughtException', err => {
            console.error(`❌ UncaughtException error: '${err.message}'. ${err.stack}`);
            logger.error(`❌ UncaughtException error: '${err.message}'. ${err.stack}`);
            process.exit();
            });
              
      process.on('unhandledRejection', err => {
            console.error(`❌ UnhandledRejection error: '${err.message}'. ${err.stack}`);
            logger.error(`❌ UnhandledRejection error: '${err.message}'. ${err.stack}`);
            process.exit();
            });
      }
    
startServer()