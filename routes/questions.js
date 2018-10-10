var express = require('express');
var router = express.Router();

const questionController = require('../controllers/questionController');

router.route('/question')
	.get(questionController.index)
	.post(questionController.create)

router.route('/question/:id')
	.get(questionController.find)
	.put(questionController.update)
	.delete(questionController.destroy)

module.exports = router;