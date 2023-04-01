import User from '../models/user.js'

const listAllUsers = (req, res) => {
    return User
      .findAll({
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((Users) => res.status(200).send(Users))
      .catch((error) => { res.status(400).send(error); });
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
          .then(() => res.status(200).send(User))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
export default { listAllUsers, getUserById, addUser, updateUser, deleteUser }