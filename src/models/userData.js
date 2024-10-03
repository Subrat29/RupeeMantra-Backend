import mongoose, { Schema } from "mongoose";

const userDataSchema = new Schema(
    {
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other'],
            required: true
        },
        cityYouLiveIn: {
            type: String,
            required: true
        },
        purposeOfLoan: {
            type: String,
            enum: [
                'Home Improvement',
                'Debt Consolidation',
                'Medical Expenses',
                'Education',
                'Business',
                'Other'
            ],
            required: true
        },
        cityWherePropertyIsLocated: {
            type: String,
            required: true
        },
        employmentType: {
            type: String,
            enum: ['Employed', 'Self-Employed', 'Unemployed', 'Student', 'Retired'],
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
            match: /.+\@.+\..+/  // Basic email format validation
        },
        mobile: {
            type: String,
            required: true,
            match: /^\d{10}$/  // Assuming a 10-digit mobile number
        }
    },
    {
        timestamps: true  // Automatically manage createdAt and updatedAt fields
    }
)

export const Users = mongoose.model("Users", userDataSchema) 