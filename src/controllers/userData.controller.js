import { User } from "../models/userData.model.js";

// function to create a new user
export const create = async (req, res) => {
  try {
    const {
      fullName,
      email,
      mobile,
      monthlyIncome,
      requiredLoanAmount,
      employmentType,
      cityYouLiveIn,
      purposeOfLoan,
      cityWherePropertyIsLocated,
      gender
    } = req.body;

    console.log(req.body);

    // create a new user
    const newUser = new User({
      fullName,
      email,
      mobile,
      monthlyIncome,
      requiredLoanAmount,
      employmentType,
      cityYouLiveIn,
      purposeOfLoan,
      cityWherePropertyIsLocated,
      gender
    });

    // save the user
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
