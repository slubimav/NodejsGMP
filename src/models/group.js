import Sequelize, { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'

const Group = sequelize.define("Group", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  permissions: {
      type: Sequelize.DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
  }
}, 
{
  sequelize,
  modelName: 'Group',
  timestamps: false,
})

// User.addHook('beforeCreate', (user) => generateHash(user))

// User.addHook('beforeUpdate', (user) => generateHash(user))

// function generateHash(user) {
//   user.password = crypto.pbkdf2Sync(user.password, 'salt', 1000, 64, `sha512`).toString(`hex`)
// }

export default Group
