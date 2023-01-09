let userDatabase = require ('./src/domen/users/user.database')
const User = require('./src/domen/users/users.model')

/* ------------------ Users -----------------------------------*/

const getAllUsers = () => userDatabase

const getUserById = (userId) => {
    const user = userDatabase.find(user => user.id === userId)
    return user !== undefined ? user : false
  }

const createUser = (user) => {
    const newUser = new User(user)
    userDatabase.push(newUser)
    return newUser
}

const updateUser = (userId, updateData) => {
  if (!userDatabase.some((user) => user.id === userId)) { return false } 
    userDatabase.forEach((user, index) => user.id === userId 
      ? userDatabase[index] = {...user, ...updateData} 
      : user
      )
    return userDatabase.find(user => user.id === userId)
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