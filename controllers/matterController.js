const Matter = require('../models/Matter');

//get matter
const index = (req, res) => {
	Matter.paginate({}, { page: req.query.page || 1, limit: 10, sort: { '_id': -1 } })
		.then(data => {
			res.json(data);
		})
}

//Get matter with _id
const find = (req, res) => {
	Matter.findOne({ '_id': req.params.id })
		.then(data => {
			res.json(data)
		})
		.catch(err => {
			res.status(300).json(err);
			console.log(err);
		})
}

//Post matter(s)
const create = (req, res) => {
	Matter.create({
		clave: req.body.clave,
		nombre: req.body.nombre,
		lic: req.body.lic,
		maestro: req.body.maestro
	}).then(docs => {
		res.json(docs)
	}).catch(err => {
		res.status(300).json(err);
	})
}

//Update matter
const update = (req, res) => {
	let body = req.body;
	let id = req.params.id;
	Matter.findOneAndUpdate({ '_id': id }, body, { new: true, runValidators: true })
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			exports.json(err)
		});
}

//Delete matter
const destroy = (req, res) => {
	let id = req.params.id;

	Matter.findByIdAndRemove(id)
		.then(data => {
			res.json({
				message: 'materia eliminada'
			})
		})
}

module.exports = { create, index, find, update, destroy }