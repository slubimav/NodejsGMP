const express = require('express')
const router = express()
const userRouter = require('./domen/users/user.router')

      router.use('/user', userRouter)

module.exports = router