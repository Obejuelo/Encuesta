var express = require('express');
var router = express.Router();

const matterController = require('../controllers/matterController');
const authenticate = require('../middlewares/authenticate');

router.route('/matter')
	.get(matterController.index)
	.post(
		authenticate.verifyToken,
		authenticate.verifyAdmin,
		matterController.create)

router.route('/matter/:id')
	.get(matterController.find)
	.put(
		authenticate.verifyToken,
		authenticate.verifyAdmin,
		matterController.update)
	.delete(
		authenticate.verifyToken,
		authenticate.verifyAdmin,
		matterController.destroy)

module.exports = router;