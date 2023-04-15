import express from 'express'
const groupRouter = express()
import groupController from '../controllers/group.js'

/* group Router */
groupRouter.get('/', groupController.listAllGroups);
groupRouter.get('/:id', groupController.getGroupById);
groupRouter.post('/', groupController.addGroup);
groupRouter.put('/:id', groupController.updateGroup);
groupRouter.delete('/:id', groupController.deleteGroup);

export default groupRouter