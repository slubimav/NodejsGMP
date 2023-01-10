import * as userDB from './src/domen/users/user.database.js'
import User from './src/domen/users/users.model.js'

let userDatabase = userDB.default.userDatabase

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
  updateUser(userId,{ isDeleted: "true"} )
  return true
}

const getAutoSuggestUsers = (login_substring, limit) => {
  const loginLikeUsers = userDatabase.filter(user => user.login.includes(login_substring))
  console.log(loginLikeUsers)
  const suggestedUsers = loginLikeUsers.sort().slice(0, limit)
  console.log(suggestedUsers)
return suggestedUsers
}

const userDatabaseMethods = {
      getAllUsers, getUserById, createUser, updateUser, removeUser, getAutoSuggestUsers
}

export default userDatabaseMethods