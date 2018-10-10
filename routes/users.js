var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

router.route('/user')
	.get(userController.index)
	.post(userController.create)

router.route('/user/:id')
	.get(userController.find)
	.put(userController.update)
	.delete(userController.destroy)

module.exports = router;