// models/BankRate.js
import mongoose from'mongoose';

const BankRateSchema = new mongoose.Schema({
  BankId: {
    type: String,
    required: true,
  },
  BankName: {
    type: String,
    required: true,
  },
  InterestRate: {
    type: String,
    required: true,
  },
  ProcessingFee: {
    type: String,
    required: true,
  },
});

export const BankRate = mongoose.model('BankRate', BankRateSchema);