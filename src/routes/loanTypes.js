// routes/loanTypes.js
import express from 'express';
import { LoanType } from '../models/loanTypes.model.js';

const router = express.Router();

// Insert Loan Type Data
router.post('/addLoanTypes', async (req, res) => {
    const { TypeLoanId, TypeName, LowestRate } = req.body;

    try {
        const newLoanType = new LoanType({
            TypeLoanId,
            TypeName,
            LowestRate,
        });

        const savedLoanType = await newLoanType.save();
        res.json(savedLoanType);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Fetch All Loan Types
router.get('/fetchAllLoanTypes', async (req, res) => {
    try {
        const loanTypes = await LoanType.find();
        res.json(loanTypes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;