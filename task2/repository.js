const userDatabase = require ('./src/domen/users/user.database')
const User = require('./src/domen/users/users.model')

/* ------------------ Users -----------------------------------*/

const getAllUsers = () => userDatabase

const getUserById = (userId) => {
    const user = userDatabase.find(user => user.id === userId)
    return user
  }

const createUser = (user) => {
    const newUser = new User(user)
    userDatabase.push(newUser)
    return newUser
}

const updateUser = (updatedUser) => {
  userDatabase = userDatabase.forEach(user => user.id === updateUser.id ? { ...user,...updateUser } : user)
  const fullUpdatedUser = userDatabase.find(user => user.id === updateUser.id)
  return fullUpdatedUser
}

const removeUser = (userId) => {
  if (!userDatabase.some((user) => user.id === userId)) { return false } 
  userDatabase = userDatabase.filter(user => user.id !== userId)
  return true
}

const userDatabaseMethods = {
      getAllUsers, getUserById, createUser, updateUser, removeUser
}

module.exports = userDatabaseMethods