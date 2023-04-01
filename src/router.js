import express from 'express'
import userRouter from './routes/user.js'

const router = express()
router.use('/users', userRouter)

export default router