import User from '../models/user.js'
import logger from '../helpers/logger.js';
import jwt from 'jsonwebtoken'
const jsonWebToken = process.env.JSON_WEB_TOKEN

const signin = (req, res) => {
  const { login , password } = req.body;
  if (!login || !password) {
    return res.status(400).json("No login or password");
  }
  return User
  .findOne({ where: { login } })
  .then((User) => {
    if (!User) {
      return res.status(404).send({
        message: 'User Not Found',
      });
    }
    const accessToken = jwt.sign(
      { login },
      jsonWebToken,
      { expiresIn: "3000s" }
    );
    return res.status(200).json({ accessToken });
  })
  .catch((error) => {
    console.log(error);
    res.status(400).send(error);
  });
}

const listAllUsers = (req, res) => {
  const reqParams = { 
    method: req.method, 
    params: req.params, 
    body: req.body }

  logger.info('Request: ' + JSON.stringify(reqParams))
    return User
      .findAll({
        order: [
          ['isDeleted', 'DESC'],
        ],
      })
      .then((Users) => res.status(200).send(Users))
      .catch((error) => { 
        logger.error('Request: ' + JSON.stringify(reqParams))
        res.status(400).send(error); });
  }

const getUserById = (req, res) => {
    return User
      .findByPk(req.params.id)
      .then((User) => {
        if (!User) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(User);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  }

const addUser = (req, res) => {
    return User
      .create({
        login: req.body.login,
        password: req.body.password,
        age: req.body.age
      })
      .then((User) => res.status(201).send(User))
      .catch((error) => res.status(400).send(error));
  }

const updateUser = (req, res) => {
    return User
      .findByPk(req.params.id)
      .then(User => {
        if (!User) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return User
          .update({
            login: req.body.login || User.login,
            password: req.body.password || User.password,
            age: req.body.age || User.age,
            isDeleted: req.body.isDeleted || User.isDeleted,
          })
          .then(() => res.status(200).send(User))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }

const deleteUser = (req, res) => {
    return User
      .findByPk(req.params.id)
      .then(User => {
        if (!User) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return User
        .update({
          isDeleted: true,
          })
          .then(() => res.status(201).send(User))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
export default { listAllUsers, getUserById, addUser, updateUser, deleteUser, signin }