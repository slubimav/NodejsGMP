import crypto from 'crypto'
import Sequelize from 'sequelize'
import { sequelize } from '../database/db.js'

const User = sequelize.define("User", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  login: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
  },
  age: {
      type: Sequelize.DataTypes.INTEGER
  },
  isDeleted: {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false
  }
}, 
{
  sequelize,
  modelName: 'User',
  timestamps: false,
})

User.addHook('beforeCreate', (user) => generateHash(user))

User.addHook('beforeUpdate', (user) => generateHash(user))

function generateHash(user) {
  user.password = crypto.pbkdf2Sync(user.password, 'salt', 1000, 64, `sha512`).toString(`hex`)
}

export default User
