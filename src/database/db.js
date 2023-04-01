import Sequelize from 'sequelize'
import * as dotenv from 'dotenv'
dotenv.config()

const config = {
      database : process.env.POSTGRES_DB,
      user : process.env.POSTGRES_USER,
      password : process.env.POSTGRES_PASSWORD,
      host : process.env.POSTGRES_HOST,
      dialect : process.env.POSTGRES_DIALECT,
}

export const sequelize = new Sequelize(
  config.database,
  config.user,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    //logging: true,
  }
);

sequelize.authenticate().then(() => {
      console.log('🚀  Connection to DB has been established successfully. ');
   }).catch((error) => {
      console.error('❌ Unable connect to DB. ', error);
   });

sequelize.sync({ force: true }).then(() => {
      console.log('🚀  All models synchronised successfully.');
   }).catch((error) => {
      console.error('❌ Erron in model synchronisation', error);
   });
