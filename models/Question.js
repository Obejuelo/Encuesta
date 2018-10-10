const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
		unique: true
	}
});

let question = mongoose.model('Question', questionSchema);

module.exports = question;