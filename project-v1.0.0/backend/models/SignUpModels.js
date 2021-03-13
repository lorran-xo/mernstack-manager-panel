const mongoose = require('mongoose')

//Aqui é criado o schema mongoose pra ser chamado na rota que for criada pra usar. o 'esqueleto' com as variaveis.
//Como se fosse os gets and setters
const signUpTemplate = new mongoose.Schema({
	fullName:{
		type:String,
		required:true
	},
	username:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	date:{
		type:Date,
		default:Date.now
	},
})

module.exports = mongoose.model('mydb', signUpTemplate)