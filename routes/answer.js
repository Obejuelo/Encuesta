var express = require('express');
var router = express.Router();

const answerController = require('../controllers/answerController');
const authenticate = require('../middlewares/authenticate');

router.route('/answer')
	// .get(answerController.index)
	.post(
		authenticate.verifyToken,
		answerController.create)
	
router.route('/answer/:alum/:mat')
	.get(answerController.findByStudent)

module.exports = router;