const Student = require('../models/Student');

//get students
const index = (req, res) => {
	Student.paginate({}, { page: req.query.page || 1, limit: 10, sort: { '_id': -1 } })
		.then(data => {
			res.json(data);
		})
}

//Get student with _id
const find = (req,res) => {
	Student.findOne({'_id': req.params.id})
		.then(data => {
			res.json(data)
		})
		.catch(err => {
			res.status(300).json(err);
			console.log(err);
		})
}

//Post student(s)
const create = (req, res) => {
	Student.create({
		ciclo: req.body.ciclo,
		matricula: req.body.matricula,
		nombre: req.body.nombre,
		grupo: req.body.grupo
	}).then(docs => {
		res.json(docs)
	}).catch(err => {
		res.status(300).json(err);
	})
}

//Update student
const update = (req,res) => {
	let body = req.body;
	let id = req.params.id;
	Student.findOneAndUpdate({'_id':id}, body, { new: true, runValidators: true })
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			exports.json(err)
		});
}

//Delete student
const destroy = (req,res) => {
	let id = req.params.id;

	Student.findByIdAndRemove(id)
		.then(data => {
			res.json({
				message: 'usuario eliminado'
			})
		})
}

module.exports = { create, index, find, update, destroy}