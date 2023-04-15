import express from 'express'
import userRouter from './routes/user.js'
import groupRouter from './routes/group.js'

const router = express()
router.use('/users', userRouter)
router.use('/groups', groupRouter)

export default router