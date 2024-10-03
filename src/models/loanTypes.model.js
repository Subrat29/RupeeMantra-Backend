import mongoose from 'mongoose';

const LoanTypeSchema = new mongoose.Schema({
  TypeLoanId: {
    type: Number,
    required: true,
  },
  TypeName: {
    type: String,
    required: true,
  },
  LowestRate: {
    type: String,
    required: true,
  },
});

export const LoanType = mongoose.model('LoanType', LoanTypeSchema);