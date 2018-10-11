var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');
const authenticate = require('../middlewares/authenticate');

router.route('/user')
	.get(userController.index)
	.post(
		authenticate.verifyToken,
		authenticate.verifyAdmin,
		userController.create)

router.route('/user/:id')
	.get(userController.find)
	.put(
		authenticate.verifyToken,
		authenticate.verifyAdmin,
		userController.update)
	.delete(
		authenticate.verifyToken,
		authenticate.verifyAdmin,
		userController.destroy)

module.exports = router;