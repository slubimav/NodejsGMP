import { v4 as uuid } from 'uuid'

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