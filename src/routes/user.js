import express from 'express'
const userRouter = express()
import userController from '../controllers/user.js'

/* user Router */
userRouter.get('/', userController.listAllUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.post('/', userController.addUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

export default userRouter