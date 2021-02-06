const express = require('express')
const userController = require('../controller/userController')

const router = express.Router()

router.get('/', userController.retrieveAllItem)
router.get('/:id', userController.retrieveById)
router.post('/', userController.createItem)
router.put('/:id', userController.updateItem)
router.delete('/:id', userController.deleteItem)

module.exports = router;
