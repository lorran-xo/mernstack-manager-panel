const mongoose = require('mongoose')

let financialSchema = new mongoose.Schema({
	balance:{
		type:Number,
	},
	totalPurchases:{
		type:Number,
	},
	totalSales:{
		type:Number,
	},
	qtProducts:{
		type:Number,
	},
})

module.exports = mongoose.model('financialsdbs', financialSchema)