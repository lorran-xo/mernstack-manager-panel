const express = require("express");
const router = express.Router();

const Product = require('../models/ProductsModel')

router.get("/", (req, res) => {
    Product.find({}).then(data => {
            return res.json(data);
        }).catch(error => {
			return res.status(400).json({error: true, message:"Ocorreu um erro!"});
        });
})

module.exports = router; //exporta pra poder usar