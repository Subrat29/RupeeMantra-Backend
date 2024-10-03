import express from 'express';
import { BankRate } from '../models/bankRate.model.js';
const router = express.Router();

// Insert Bank Rate Data
router.post('/addBankRate', async (req, res) => {
    const { BankId, BankName, InterestRate, ProcessingFee } = req.body;

    try {
        const newBankRate = new BankRate({
            BankId,
            BankName,
            InterestRate,
            ProcessingFee,
        });

        const savedRate = await newBankRate.save();
        res.json(savedRate);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Fetch All Bank Rates
router.get('/fetchAllBanksRates', async (req, res) => {
    try {
        const rates = await BankRate.find();
        res.json(rates);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
