import express from 'express'
const userRouter = express()
import userController from '../controllers/user.js'
//import login from '../middleware/jwtauth.js'

/* user Router */
userRouter.get('/', userController.listAllUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.post('/', userController.addUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);
userRouter.post('/signin', userController.signin);

export default userRouter