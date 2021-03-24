const express = require("express");
const router=express.Router();
const productTemplateCopy = require('../models/ProductsModel')

router.post("/", async(request, response) => {
    productTemplateCopy.findOneAndUpdate({ _id: request.body._id }, request.body, { new: true }, (err, doc) => {
        if (!err) {
			const newProduct = new productTemplateCopy({
				kgPurchasePrice: request.body.kgPurchasePrice,
				kgResalePrice: request.body.kgResalePrice,
			})
			newProduct.updateOne();
            response.status(200).json({message: "ok"});
        } else {
            response.status(500).json({error: "Internal server error"});
        }
    });
})

module.exports = router;