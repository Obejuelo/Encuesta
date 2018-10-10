const Relation = require('../models/Relation');

//get matter
const index = (req, res) => {
	Relation.paginate({}, { page: req.query.page || 1, limit: 10, sort: { '_id': -1 } })
		.then(data => {
			res.json(data);
		})
}

//Get matter with _id
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

//Post matter(s)
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
		clave: req.body.clave,
		matricula: req.body.matricula,
		ciclo: req.body.ciclo,
		codigo: req.body.codigo
	});

	relation.save((err, relation) => {
		if(err){
			res.json(err)
		}
		res.json(relation);
	})

}

//Update matter
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

//Delete matter
const destroy = (req, res) => {
	let id = req.params.id;

	Relation.findByIdAndRemove(id)
		.then(data => {
			res.json({
				message: 'relacion eliminada'
			})
		})
}

module.exports = { create, index, find, update, destroy }