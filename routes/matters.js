var express = require('express');
var router = express.Router();

const matterController = require('../controllers/matterController');

router.route('/matter')
	.get(matterController.index)
	.post(matterController.create)

router.route('/matter/:id')
	.get(matterController.find)
	.put(matterController.update)
	.delete(matterController.destroy)

module.exports = router;