const mongoose = require('mongoose')

const productTemplate = new mongoose.Schema({
	barCode:{
		type:String,
		required:true
	},
	productName:{
		type:String,
		required:true
	},
	kgQuantity:{
		type:Number,
		required:true
	},
	kgPurchasePrice:{
		type:Number,
		required:true
	},
	totalKgPurchasePrice:{
		type:Number,
		required:true
	},
	kgResalePrice:{
		type:Number,
		required:true
	},
	insertedDate:{
		type:Date,
		default:Date.now
	},
})
	
module.exports = mongoose.model('productsdbs', productTemplate)