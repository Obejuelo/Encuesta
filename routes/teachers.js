var express = require('express');
var router = express.Router();

const teacherController = require('../controllers/teacherController');

router.route('/teacher')
	.get(teacherController.index)
	.post(teacherController.create)

router.route('/teacher/:id')
	.get(teacherController.find)
	.put(teacherController.update)
	.delete(teacherController.destroy)

module.exports = router;