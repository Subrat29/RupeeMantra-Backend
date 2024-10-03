import { Users } from "../models/userData.js";

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
      gender // Added missing gender field
    } = req.body;

    console.log(req.body);

    // validate the data
    // if (
    //   !fullName ||
    //   !email ||
    //   !mobile ||
    //   !monthlyIncome ||
    //   !requiredLoanAmount ||
    //   !employmentType ||
    //   !cityYouLiveIn ||
    //   !purposeOfLoan ||
    //   !cityWherePropertyIsLocated ||
    //   !gender  // Added gender to validation
    // ) {
    //   return res.status(400).json({ message: "All fields are required" });
    // }

    // create a new user
    const newUser = new Users({
      fullName,
      email,
      mobile,
      monthlyIncome,
      requiredLoanAmount,
      employmentType,
      cityYouLiveIn,
      purposeOfLoan,
      cityWherePropertyIsLocated,
      gender  // Included gender in the user creation
    });

    // save the user
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
