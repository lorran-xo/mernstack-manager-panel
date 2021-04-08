const express = require("express");
const router=express.Router();
const financialsTemplateCopy = require('../models/FinancialsModel')

router.post("/", async(request, response) => {
    financialsTemplateCopy.findOneAndUpdate({ _id: "605ab2e0f7d64f0a784dda93" }, request.body, { new: true }, (err, doc) => {
        if (!err) {
			const newUpdate = new financialsTemplateCopy({
                balance: request.body.balance,
                qtProducts: request.body.qtProducts,
                totalPurchases: request.body.totalPurchases,
                qtProducts: request.body.qtProducts,
			})
			newUpdate.updateOne();
            response.status(200).json({message: "ok"});
        } else {
            response.status(500).json({error: "Internal server error"});
        }
    });
})

module.exports = router;