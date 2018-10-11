const jwt = require('jsonwebtoken');

let verifyToken = (req, res, next) => {

	let token = req.get('token');

	jwt.verify(token, process.env.JWT, (err, decoded) => {

		if (err) {
			return res.status(401).json({
				ok: false,
				err: {
					message: 'Token no válido'
				}
			});
		}

		req.user = decoded;
		next();
	});
}

let verifyAdmin = (req, res, next) => {
	let user = req.user;

	if (user.admin === true) {
		next();
	} else {
		return res.json({
			message: 'Ups, parece que no eres administrador'
		});
	}

}

module.exports = {
	verifyToken,
	verifyAdmin
}