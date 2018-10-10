var express = require('express');
var router = express.Router();

const relationController = require('../controllers/relationController');

router.route('/relation')
	.get(relationController.index)
	.post(relationController.create)

router.route('/relation/:id')
	.get(relationController.find)
	.put(relationController.update)
	.delete(relationController.destroy)

module.exports = router;