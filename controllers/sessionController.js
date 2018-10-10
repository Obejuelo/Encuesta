const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Student = require('../models/Student');

const authenticate = (req, res, next) => {
	User.findOne({ email: req.body.email })
		.then(user => {
			user.verifyPassword(req.body.password)
				.then(valid => {
					if (valid) {
						req.user = user;
						next();
					} else {
						next(new Error('INVALID CREDENTIALS'))
						res.json({ message: 'credenciales inválidas' })
					}
				})
		}).catch((err) => {
			res.status(400).json({
				message: 'credenciales invalidas',
				err
			})
		})
}


const generateToken = (req, res, next) => {
	if (!req.user) return next();

	req.token = jwt.sign({ id: req.user._id }, process.env.JWT, { expiresIn: process.env.CADUCIDAD_TOKEN });

	next();
}

const sendToken = (req, res) => {
	if (req.user) {
		res.json({
			user: req.user,
			jwt: req.token
		});
	} else {
		res.status(422).json({
			error: 'could not generate token'
		});
	}
}

const authenticateLogin = (req, res, next) => {
	Student.findOne({ nombre: req.body.nombre })
		.then(user => {
			if(user.matricula !== req.body.matricula){
				return res.status(400).json({
					message: 'credenciales inválidas'
				})
			}
			req.user = user;
			next()
		}).catch((err) => {
			res.status(400).json({
				message: 'credenciales invalidas',
				err
			})
		})
}


module.exports = {
	authenticate,
	generateToken,
	sendToken,
	authenticateLogin
}
