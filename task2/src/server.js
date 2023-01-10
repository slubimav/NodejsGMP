import express from 'express'
import router from './router.js'

const startServer = () => {
      const server = express()
      server.use('/', router)
      server.listen(3000, () => { 
            console.log(`🚀  Express server running on PORT:3000\nOpen http://localhost:3000`)})

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