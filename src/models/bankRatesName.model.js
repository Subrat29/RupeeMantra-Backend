import mongoose from 'mongoose';

const BankRatesNameSchema = new mongoose.Schema({
  BankId: {
    type: String,
    required: true,
  },
  BankName: {
    type: String,
    required: true,
  },
});

export const BankRatesName = mongoose.model('BankRatesName', BankRatesNameSchema);
