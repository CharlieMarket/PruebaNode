const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let Product = new Schema({
	name: String,
	price: Number,
	description: String,
	img: String,
	data: Date
});

module.exports = mongoose.model('Product', Product);