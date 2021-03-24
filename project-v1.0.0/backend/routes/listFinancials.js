const express = require("express");
const router = express.Router();

const Financials = require('../models/FinancialsModel')

router.get("/", (req, res) => {
    Financials.find({}).then(data => {
            return res.json(data);
        }).catch(error => {
			return res.status(400).json({error: true, message:"Ocorreu um erro!"});
        });
})

module.exports = router;