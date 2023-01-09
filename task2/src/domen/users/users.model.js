const { v4: uuid } = require('uuid');

class User {
      constructor({id, login, password, age, isDeleted}){
            this.id = uuid()
            this.login = login
            this.password = password
            this.age = age
            this.isDeleted = isDeleted
      }
}

module.exports = User