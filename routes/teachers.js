var express = require('express');
var router = express.Router();

const teacherController = require('../controllers/teacherController');
const authenticate = require('../middlewares/authenticate');

router.route('/teacher')
	.get(teacherController.index)
	.post(
		authenticate.verifyToken,
		authenticate.verifyAdmin,
		teacherController.create)

router.route('/teacher/:id')
	.get(teacherController.find)
	.put(
		authenticate.verifyToken,
		authenticate.verifyAdmin,
		teacherController.update)
	.delete(
		authenticate.verifyToken,
		authenticate.verifyAdmin,
		teacherController.destroy)

module.exports = router;