import express from 'express'
const userRouter = express()
import userController from '../controllers/user.js'
import login from '../middleware/jwtauth.js'

/* user Router */
userRouter.get('/', login, userController.listAllUsers);
userRouter.get('/:id', login, userController.getUserById);
userRouter.post('/', userController.addUser);
userRouter.put('/:id', login, userController.updateUser);
userRouter.delete('/:id', login, userController.deleteUser);
userRouter.post('/signin', userController.signin);

export default userRouter