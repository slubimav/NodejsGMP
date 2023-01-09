const express = require('express')
const userRouter = express()

            userRouter.get('/', (request, response) =>{
            response.send('Hello world from userRouter!')
      })

module.exports = userRouter