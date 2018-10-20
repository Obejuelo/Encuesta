const mongoose = require('mongoose');
const mongoPage = require('mongoose-paginate');

const relationSchema = new mongoose.Schema({
	materia: {
		type: String,
		required: true
	},
	clave: {
		type: String,
		required:true
	},
	matricula: {
		type: String,
		required: true
	},
	ciclo: {
		type: String,
		required: true
	},
	maestro: {
		type: String,
		required: true
	}
});

//Paginate with mongoose-paginate
mongoose.plugin(mongoPage);

let relation = mongoose.model('Relation', relationSchema);

module.exports = relation;