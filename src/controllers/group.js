import Group from '../models/group.js'

const listAllGroups = (req, res) => {
    return Group
      .findAll()
      .then((Groups) => res.status(200).send(Groups))
      .catch((error) => { res.status(400).send(error); });
  }

const getGroupById = (req, res) => {
    return Group
      .findByPk(req.params.id)
      .then((Group) => {
        if (!Group) {
          return res.status(404).send({
            message: 'Group Not Found',
          });
        }
        return res.status(200).send(Group);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  }

const addGroup = (req, res) => {
    return Group
      .create({
        name: req.body.name,
        permissions: req.body.permissions
      })
      .then((Group) => res.status(201).send(Group))
      .catch((error) => res.status(400).send(error));
  }

const updateGroup = (req, res) => {
    return Group
      .findByPk(req.params.id)
      .then(Group => {
        if (!Group) {
          return res.status(404).send({
            message: 'Group Not Found',
          });
        }
        return Group
          .update({
            name: req.body.name || Group.name,
            permissions: req.body.permissions || Group.permissions
          })
          .then(() => res.status(200).send(Group))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }

const deleteGroup = (req, res) => {
    return Group
      .findByPk(req.params.id)
      .then(Group => {
        if (!Group) {
          return res.status(400).send({
            message: 'Group Not Found',
          });
        }
        return Group
        .destroy()
          .then(() => res.status(204).send(Group))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
export default { listAllGroups, getGroupById, addGroup, updateGroup, deleteGroup }