import pkg from 'uuid'
const { v4: uuid } = pkg

class User {
      constructor({login, password, age, isDeleted}){
            this.id = uuid()
            this.login = login
            this.password = password
            this.age = age
            this.isDeleted = isDeleted
      }
}

export default User