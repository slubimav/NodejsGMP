import User from '../models/user.js'
import logger from '../helpers/logger.js';

const listAllUsers = (req, res) => {
  const reqParams = { ...req.method, ...req.params, ...req.body }
  logger.debug('Error in Request: ' + JSON.stringify(reqParams))
    return User
      .findAll({
        order: [
          ['isDeleted', 'DESC'],
        ],
      })
      .then((Users) => res.status(200).send(Users))
      .catch((error) => { 
        logger.error('ERROR: ' + 'Method: ' + req.method + 'Params: ' + req.params + 'Body: ' + req.body)
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
export default { listAllUsers, getUserById, addUser, updateUser, deleteUser }