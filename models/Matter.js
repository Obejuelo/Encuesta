const mongoose = require('mongoose');
const mongoPage = require('mongoose-paginate');

const matterSchema = new mongoose.Schema({
	clave: {
		type: String,
		required: true,
		unique: true
	},
	nombre: {
		type: String,
		require: true
	},
	lic: {
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

let matter = mongoose.model('Matter', matterSchema);

module.exports = matter;