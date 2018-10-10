var express = require('express');
var router = express.Router();

const sessionController = require('../controllers/sessionController');

router.route('/session')
	.post(
		sessionController.authenticate,
		sessionController.generateToken,
		sessionController.sendToken)
		
module.exports = router;