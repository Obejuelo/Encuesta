const Question = require('../models/Question');

//get question
const index = (req, res) => {
	Question.find({})
		.then(data => {
			res.json(data);
		})
}

//Get question with _id
const find = (req, res) => {
	Question.findOne({ '_id': req.params.id })
		.then(data => {
			res.json(data)
		})
		.catch(err => {
			res.status(300).json(err);
			console.log(err);
		})
}

//Post question(s)
const create = (req, res) => {
	Question.create({
		nombre: req.body.nombre
	}).then(docs => {
		res.json(docs)
	}).catch(err => {
		res.status(300).json(err);
	})

}

//Update question
const update = (req, res) => {
	let body = req.body;
	let id = req.params.id;
	Question.findOneAndUpdate({ '_id': id }, body, { new: true, runValidators: true })
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			exports.json(err)
		});
}

//Delete question
const destroy = (req, res) => {
	let id = req.params.id;

	Question.findByIdAndRemove(id)
		.then(data => {
			res.json({
				message: 'pregunta eliminada'
			})
		})
}

module.exports = { create, index, find, update, destroy }