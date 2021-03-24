const mongoose = require('mongoose')

let financialSchema = new mongoose.Schema({
	balance:{
		type:Number,
		required:true
	},
	totalPurchases:{
		type:Number,
		required:true
	},
	totalSales:{
		type:Number,
		required:true
	},
	qtProducts:{
		type:Number,
		required:true
	},
})

module.exports = mongoose.model('financialsdbs', financialSchema)