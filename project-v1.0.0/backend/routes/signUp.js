const express = require("express");
const router=express.Router();
// Exporta o express e usa
const signUpTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')


//Cria a rota get ou post, com nome, parametros e retorno (response)
router.post("/", async(request, response) => {

	const saltPassword = await bcrypt.genSalt(10) //Criptografando a senha no banco
	const encryptedPassword = await bcrypt.hash(request.body.password, saltPassword)

	const signedUpUser = new signUpTemplateCopy({
		fullName: request.body.fullName, //Busca dentro do schema criado a variavel fullName
		username: request.body.username,
		email: request.body.email,
		password: encryptedPassword,
		//date: request.body.date, Nao chama a data pq é uma funcao, front nao vai mexer c isso
	})
	signedUpUser.save() //Agora a const signedUpUser tem salvo tudo isso q foi criado
		.then(data =>{ //Se der sucesso, cai aqui
			response.json(data)
		})
		.catch(error =>{ //Se der erro, cai aqui
			response.json(error)
		})
})

module.exports = router; //exporta pra poder usar