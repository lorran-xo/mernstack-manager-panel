const mongoose = require('mongoose')

let imageSchema = new mongoose.Schema({
	image:{ 
		type: String,
		default: 'logo.jpg'
	},
	originalName:{
		type: String,
	},
	mimeType:{
		type: String,
	},
	destination:{
		type: String,
	},
	path:{
		type: String,
	},
	size:{
		type: Number,
	},
})

module.exports = mongoose.model('configdbs', imageSchema)