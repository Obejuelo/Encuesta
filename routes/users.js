var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');
const authenticate = require('../middlewares/authenticate');

router.route('/user')
	.get(userController.index)
	.post(
		authenticate.verificaToken,
		userController.create)

router.route('/user/:id')
	.get(userController.find)
	.put(userController.update)
	.delete(userController.destroy)

module.exports = router;