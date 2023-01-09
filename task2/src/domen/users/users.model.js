const { v4: uuid } = require('uuid');

class User {
      constructor({id, password, age, isDeleted}){
            this.id = uuid()
            this.password = password
            this.age = age
            this.isDeleted = isDeleted
      }
}

module.exports = User