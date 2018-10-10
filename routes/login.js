var express = require('express');
var router = express.Router();

const sessionController = require('../controllers/sessionController');

router.route('/login')
	.post(
		sessionController.authenticateLogin,
		sessionController.generateToken,
		sessionController.sendToken)

module.exports = router;