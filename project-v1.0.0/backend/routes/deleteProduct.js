const express = require("express");
const router=express.Router();
const productTemplateCopy = require('../models/ProductsModel')

router.post("/", async(request, response) => {
    productTemplateCopy.findOneAndDelete({ _id: request.body._id }, (err, doc) => {
        if (err) {
            response.status(500).json({error: "Internal server error"});
        } else {
            response.status(200).json({message: "ok"});
        }
    });
})

module.exports = router;