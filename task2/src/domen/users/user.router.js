const express = require('express')
const userRouter = express()
const userDatabaseMethods = require('../../../repository')

      userRouter.get('/', (request, response) => {
            response.send(userDatabaseMethods.getAllUsers())
      })

module.exports = userRouter