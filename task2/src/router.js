import express from 'express'
import userRouter from './domen/users/user.router.js'

const router = express()
router.use('/users', userRouter)

export default router