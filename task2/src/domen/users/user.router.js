import express from 'express'

import { validator } from './user.validator.js'
const userRouter = express()
userRouter.use(express.json())  

import userDatabaseMethods from '../../../repository.js'

      userRouter.get('/', (request, response) => {
            response.send(userDatabaseMethods.getAllUsers())
      })

      userRouter.get('/suggest-users', (request, response) => {
            const { login_substring = 'est', limit = '10' } = request.query
            const users = userDatabaseMethods.getAutoSuggestUsers(login_substring, limit)
            response.send(users)

      })

      userRouter.get('/:id', (request, response) => {
            const id = request.params.id
            const isUserFound = userDatabaseMethods.getUserById(id)

            isUserFound
            ? response.send(isUserFound)
            : response.status(404).send(`User id = ${id} not found in database`)

      })

      userRouter.get('/validate/:id', (request, response) => {
            const userId = request.params.id
            const { login, password } = request.body

            const isUserFound = userDatabaseMethods.getUserById(userId)
            if (!isUserFound) {
                  response.status(404).send(`User id = ${userId} not found in database`)
            } else {
                  if(!Object.keys(request.body).length) {
                        response.status(400).send('Bad request. Body is empty.')
                  } else {
                        const isPasswordValid = userDatabaseMethods.validatePassword(userId, login, password)
                        isPasswordValid ? response.status(200).send(`User valid`) : response.status(200).send(`User NOT valid`)
                  }

            }


      })

      userRouter.post('/', validator, (request, response) => {
                  const body = request.body

                  if(!Object.keys(request.body).length) {
                        response.status(400).send('Bad request. Body is empty.')
                  } else {
                        const createdUser = userDatabaseMethods.createUser(body)
                        response.status(201).send(`User created:\n ${JSON.stringify(createdUser)}`)
                  }

      })

      userRouter.put('/:id', validator, (request, response) => {
            const id = request.params.id
            const body = request.body
            if(!id || !Object.keys(request.body).length) {
                  response.status(400).send(`User's id or body are not defined.`)
              } else {
                  const updatedUser = userDatabaseMethods.updateUser(id, body)
                  !updatedUser
                  ? response.status(404).send(`User id = ${id} not found in database`)
                  : response.status(200).send(`User updated:\n ${JSON.stringify(updatedUser)}`)
              }
      })

      userRouter.delete('/:id', (request, response) => {
            const id = request.params.id
            if(!id) {
                  response.status(400).send(`User id is not defined.`)
              } else {
                  const deletedUser = userDatabaseMethods.removeUser(id)
                  !deletedUser
                  ? response.status(404).send(`User id = ${id} not found in database`)
                  : response.status(204).send(`User id = ${id} deleted.`)
              }
      })

export default userRouter