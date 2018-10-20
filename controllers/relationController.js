const Relation = require('../models/Relation');

//get relation
const index = (req, res) => {
	Relation.paginate({}, { page: req.query.page || 1, limit: 10, sort: { '_id': -1 } })
		.then(data => {
			res.json(data);
		})
}

//Get relation with _id
const find = (req, res) => {
	Relation.findOne({ '_id': req.params.id })
		.then(data => {
			res.json(data)
		})
		.catch(err => {
			res.status(300).json(err);
			console.log(err);
		})
}

//get relation by enrollment
const findByEnrollment = (req, res) => {
	Relation.find({'matricula': req.params.matr})
		.then(data => {
			res.json(data);
		})
}

//Post relation(s)
const create = (req, res) => {
	// Relation.create({
	// 	clave: req.body.clave,
	// 	matricula: req.body.matricula,
	// 	ciclo: req.body.ciclo,
	// 	codigo: req.body.codigo
	// }).then(docs => {
	// 	res.json(docs)
	// }).catch(err => {
	// 	res.status(300).json(err);
	// })

	let relation = new Relation({
		materia: req.body.materia,
		matricula: req.body.matricula,
		ciclo: req.body.ciclo,
		maestro: req.body.maestro,
		clave: req.body.clave
	});

	relation.save((err, relation) => {
		if(err){res.json(err)}
		
		res.json(relation);
	})

}

//Update relation
const update = (req, res) => {
	let body = req.body;
	let id = req.params.id;
	Relation.findOneAndUpdate({ '_id': id }, body, { new: true, runValidators: true })
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			exports.json(err)
		});
}

//Delete relation
const destroy = (req, res) => {
	let id = req.params.id;

	Relation.findByIdAndRemove(id)
		.then(data => {
			res.json({
				message: 'relacion eliminada'
			})
		})
}

module.exports = { create, index, find, update, destroy, findByEnrollment }