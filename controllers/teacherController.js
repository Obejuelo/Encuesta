const Teacher = require('../models/Teacher');

//get teachers
const index = (req, res) => {
	Teacher.paginate({}, { page: req.query.page || 1, limit: 10, sort: { '_id': -1 } })
		.then(data => {
			res.json(data);
		})
}

//Get teacher with _id
const find = (req, res) => {
	Teacher.findOne({ '_id': req.params.id })
		.then(data => {
			res.json(data)
		})
		.catch(err => {
			res.status(300).json(err);
			console.log(err);
		})
}

//Get teacher with _id
const findById = (req, res) => {
	Teacher.findOne({ 'clave': req.params.id })
		.then(data => {
			res.json(data)
		})
		.catch(err => {
			res.status(300).json(err);
			console.log(err);
		})
}

//Post teacher(s)
const create = (req, res) => {
	Teacher.create({
		clave: req.body.clave,
		nombre: req.body.nombre
	}).then(docs => {
		res.json(docs)
	}).catch(err => {
		res.status(300).json(err);
	})
}

//Update teacher
const update = (req, res) => {
	let body = req.body;
	let id = req.params.id;
	Teacher.findOneAndUpdate({ '_id': id }, body, { new: true, runValidators: true })
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			exports.json(err)
		});
}

//Delete teacher
const destroy = (req, res) => {
	let id = req.params.id;

	Teacher.findByIdAndRemove(id)
		.then(data => {
			res.json({
				message: 'usuario eliminado'
			})
		})
}

module.exports = { create, index, find, update, destroy, findById}