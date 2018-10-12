var express = require('express');
var router = express.Router();

const relationController = require('../controllers/relationController');
const authenticate = require('../middlewares/authenticate');

router.route('/relation')
	.get(relationController.index)
	.post(
		authenticate.verifyToken,
		authenticate.verifyAdmin,
		relationController.create)

router.route('/relation/:id')
	.get(relationController.find)
	.put(
		authenticate.verifyToken,
		authenticate.verifyAdmin,
		relationController.update)
	.delete(
		authenticate.verifyToken,
		authenticate.verifyAdmin,
		relationController.destroy)

router.route('/relation/student/:matr')
	.get(
		authenticate.verifyToken,
		relationController.findByEnrollment)

module.exports = router;