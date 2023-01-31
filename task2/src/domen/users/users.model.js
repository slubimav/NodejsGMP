import { v4 as uuid } from 'uuid'
import crypto from 'crypto'

class User {
      constructor({login, password, age}){
            this.id = uuid()
            this.login = login
            this.password = this.encryptPassword(password)
            this.age = age
            this.isDeleted = false
      }
      encryptPassword(password) {
            return crypto.pbkdf2Sync(password, 'salt', 1000, 64, `sha512`).toString(`hex`)
      }
}

export default User