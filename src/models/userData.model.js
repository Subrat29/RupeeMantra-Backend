import mongoose, { Schema } from "mongoose";

const userDataSchema = new Schema(
    {
        gender: {
            type: String,
            enum: ['Male', 'Female'],
            required: true
        },
        cityYouLiveIn: {
            type: String,
            required: true
        },
        purposeOfLoan: {
            type: String,
            enum: [
                'Transfer My Existing Loan',
                'Commercial/Project Loan',
                'Residential Home Loan'
            ],
            required: true
        },
        cityWherePropertyIsLocated: {
            type: String,
            required: true
        },
        employmentType: {
            type: String,
            enum: ['Self Employed Business','Self Employed Professional','Salaried'],
            required: true
        },
        monthlyIncome: {
            type: Number,
            required: true,
            min: 0
        },
        requiredLoanAmount: {
            type: Number,
            required: true,
            min: 0
        },
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /.+\@.+\..+/
        },
        mobile: {
            type: String,
            required: true,
            match: /^\d{10}$/
        }
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userDataSchema) 