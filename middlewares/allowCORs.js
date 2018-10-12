const expressUnless = require('express-unless');

module.exports = function (options) {
	let CORsMiddleware = function (req, res, next) {

		res.header("Access-Control-Allow-Headers", '*');
		res.header("Access-Control-Allow-Origin", '*');
		

		next();
	}

	CORsMiddleware.unless = expressUnless;

	return CORsMiddleware;
}
