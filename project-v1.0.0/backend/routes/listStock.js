const express = require("express");
const router = express.Router();

var Stock = require('../models/insertProductModels')


router.get("/", (request, response) => {

    const listing = new Stock({
        barCode: request.body.barCode, //Busca dentro do schema criado a variavel fullName
		productName: request.body.productName,
		kgQuantity: request.body.kgQuantity,
		kgPurchasePrice: request.body.kgPurchasePrice,
		totalKgPurchasePrice: request.body.totalKgPurchasePrice,
		kgResalePrice: request.body.kgResalePrice,
    });

    listing.find({}).then((data) => {
			console.log('ok');
            return res.json(data);
        }).catch((error) => {
			console.log('error');
			return res.status(400).json({error: true, message:"Ocorreu um erro!"});
        });
})


module.exports = router; //exporta pra poder usar