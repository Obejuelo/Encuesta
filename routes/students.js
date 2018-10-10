var express = require('express');
var router = express.Router();

const studentController = require('../controllers/studentController');

router.route('/student')
	.get(studentController.index)
	.post(studentController.create)

router.route('/student/:id')
	.get(studentController.find)
	.put(studentController.update)
	.delete(studentController.destroy)

module.exports = router;