import { v4 as uuid } from 'uuid'
import crypto from 'crypto'
import Sequelize from 'sequelize';
import { sequelize } from '../database/db.js';


class User extends Sequelize.Model {
      constructor({login, password, age}){
            super()
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

User.init({
  // Model attributes are defined here
  id: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  login: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },
  password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
  },
  age: {
      type: Sequelize.DataTypes.INTEGER
  },
  isDeleted: {
      type: Sequelize.DataTypes.BOOLEAN
  }
}, {
  sequelize,
  modelName: 'User' // We need to choose the model name
});


export default User
