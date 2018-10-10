const mongoose = require('mongoose');
const mongoPage = require('mongoose-paginate');

const teacherSchema = new mongoose.Schema({
	clave: {
		type: Number,
		required: true,
		unique: true
	},
	nombre: {
		type: String,
		require: true
	}
});

//Paginate with mongoose-paginate
mongoose.plugin(mongoPage);

let teacher = mongoose.model('Teacher', teacherSchema);

module.exports = teacher;