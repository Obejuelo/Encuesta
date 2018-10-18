const mongoose = require('mongoose');

let answerSchema = new mongoose.Schema({
	maestro: {
		type: String,
		required: true
	},
	materia:{
		type: String,
		required: true
	},
	pregunta: {
		type: String,
		required: true
	},
	resp: {
		type: String,
		required: true
	}
})

let Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;