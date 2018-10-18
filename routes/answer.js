var express = require('express');
var router = express.Router();

const answerController = require('../controllers/answerController');
const authenticate = require('../middlewares/authenticate');

router.route('/answer')
	// .get(answerController.index)
	.post(
		authenticate.verifyToken,
		answerController.create)

module.exports = router;