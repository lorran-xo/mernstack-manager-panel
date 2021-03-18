const express = require("express");
const router=express.Router();
const productTemplateCopy = require('../models/ProductsModel')

router.post("/", async(request, response) => {
	const newProduct = new productTemplateCopy({
		barCode: request.body.barCode, //Busca dentro do schema criado a variavel fullName
		productName: request.body.productName,
		kgQuantity: request.body.kgQuantity,
		kgPurchasePrice: request.body.kgPurchasePrice,
		totalKgPurchasePrice: request.body.totalKgPurchasePrice,
		kgResalePrice: request.body.kgResalePrice,
	})
	newProduct.save()
		.then(data =>{ //Se der sucesso, cai aqui
			response.json(data)
		})
		.catch(error =>{ //Se der erro, cai aqui
			response.json(error)
		})
})

module.exports = router; //exporta pra poder usar