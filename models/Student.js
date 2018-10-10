const mongoose = require('mongoose');
const mongoPage = require('mongoose-paginate');

const studentSchema = new mongoose.Schema({
	ciclo: {
		type: String,
		required: true
	},
	matricula: {
		type: String,
		required: true,
		unique: true
	},
	nombre: {
		type: String,
		require: true
	},
	grupo: String
});

//Paginate with mongoose-paginate
mongoose.plugin(mongoPage);

let student = mongoose.model('Student', studentSchema);

module.exports = student;