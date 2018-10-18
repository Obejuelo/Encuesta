const Answer = require('../models/Answer');

const create = (req, res) => {
	Answer.create({
		maestro: req.body.maestro,
		materia: req.body.materia,
		pregunta: req.body.pregunta,
		resp: req.body.resp
	}).then(data => {
		res.json(data);
	}).catch(err => {
		res.json(err);
	})
}

module.exports = {create}