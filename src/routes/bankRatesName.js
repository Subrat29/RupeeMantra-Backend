// routes/bankRatesName.js
import express from 'express';
import { BankRatesName } from '../models/bankRatesName.model.js';

const router = express.Router();

// Insert Bank Rate Name Data
router.post('/addBankName', async (req, res) => {
    const { BankId, BankName } = req.body;

    try {
        const newBankRatesName = new BankRatesName({
            BankId,
            BankName,
        });

        const savedBankRatesName = await newBankRatesName.save();
        res.json(savedBankRatesName);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Fetch All Bank Rates Names
router.get('/fetchAllBankNames', async (req, res) => {
    try {
        const bankRatesNames = await BankRatesName.find();
        res.json(bankRatesNames);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
