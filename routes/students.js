var express = require('express');
var router = express.Router();

const studentController = require('../controllers/studentController');
const authenticate = require('../middlewares/authenticate');

router.route('/student')
	.get(studentController.index)
	.post(
		authenticate.verifyToken,
		authenticate.verifyAdmin,
		studentController.create)

router.route('/student/:id')
	.get(studentController.find)
	.put(
		authenticate.verifyToken,
		authenticate.verifyAdmin,
		studentController.update)
	.delete(
		authenticate.verifyToken,
		authenticate.verifyAdmin,
		studentController.destroy)

module.exports = router;