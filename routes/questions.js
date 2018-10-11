var express = require('express');
var router = express.Router();

const questionController = require('../controllers/questionController');
const authenticate = require('../middlewares/authenticate');

router.route('/question')
	.get(questionController.index)
	.post(
		authenticate.verifyToken,
		authenticate.verifyAdmin,
		questionController.create)

router.route('/question/:id')
	.get(questionController.find)
	.put(
		authenticate.verifyToken,
		authenticate.verifyAdmin,
		questionController.update)
	.delete(
		authenticate.verifyToken,
		authenticate.verifyAdmin,
		questionController.destroy)

module.exports = router;