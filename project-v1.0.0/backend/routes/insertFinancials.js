const express = require("express");
const router=express.Router();
const financialsTemplateCopy = require('../models/FinancialsModel')
//APENAS PARA INSERIR OS DADOS PELO ARQUIVO HTTP
router.post("/", async(request, response) => {
	const newFinancials = new financialsTemplateCopy({
		balance: request.body.balance, //Busca dentro do schema criado a variavel fullName
		totalPurchases: request.body.totalPurchases,
		totalSales: request.body.totalSales,
		qtProducts: request.body.qtProducts,
	})
	newFinancials.save()
		.then(data =>{ //Se der sucesso, cai aqui
			response.json(data)
		})
		.catch(error =>{ //Se der erro, cai aqui
			response.json(error)
		})
})

module.exports = router; //exporta pra poder usar