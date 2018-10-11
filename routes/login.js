var express = require('express');
var router = express.Router();

const sessionController = require('../controllers/sessionController');

router.route('/login')
	.post(
		sessionController.authenticateLogin,
		sessionController.generateTokenStudent,
		sessionController.sendToken)

module.exports = router;