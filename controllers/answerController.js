const Answer = require('../models/Answer');

const create = (req, res) => {
	Answer.create({
		alumno: req.body.alumno,
		materia: req.body.materia,
		pregunta: req.body.pregunta,
		resp: req.body.resp
	}).then(data => {
		res.json(data);
	}).catch(err => {
		res.json(err);
	})
}

const findByStudent = (req,res) => {
	Answer.find({ alumno: req.params.alum,materia: req.params.mat})
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			res.json(err);
		})
}

module.exports = { create, findByStudent }