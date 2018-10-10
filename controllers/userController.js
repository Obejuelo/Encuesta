const User = require('../models/User');

//get user
const index = (req, res) => {
	User.find({})
		.then(data => {
			res.json(data);
		})
}

//Get user with _id
const find = (req, res) => {
	User.findOne({ '_id': req.params.id })
		.then(data => {
			res.json(data)
		})
		.catch(err => {
			res.status(300).json(err);
			console.log(err);
		})
}

//Post user(s)
const create = (req, res) => {
	User.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	}).then(docs => {
		res.json(docs)
	}).catch(err => {
		res.status(300).json(err);
	})

}

//Update user
const update = (req, res) => {
	let body = req.body;
	let id = req.params.id;
	User.findOneAndUpdate({ '_id': id }, body, { new: true, runValidators: true })
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			exports.json(err)
		});
}

//Delete user
const destroy = (req, res) => {
	let id = req.params.id;

	User.findByIdAndRemove(id)
		.then(data => {
			res.json({
				message: 'pregunta eliminada'
			})
		})
}

module.exports = { create, index, find, update, destroy }