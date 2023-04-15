import express from 'express'
import userRouter from './routes/user.js'
import groupRouter from './routes/group.js'
import login from './middleware/jwtauth.js'

const router = express()
router.use('/users', userRouter)
router.use('/groups', login, groupRouter)

export default router