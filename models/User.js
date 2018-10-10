const mongoose = require('mongoose');
const mongoBcrypt = require('mongoose-bcrypt');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	admin:{
		type: Boolean,
		default: true
	}
});

userSchema.plugin(mongoBcrypt);

let user = mongoose.model('User', userSchema);

module.exports = user;