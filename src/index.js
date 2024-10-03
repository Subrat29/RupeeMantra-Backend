import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from "./app.js"
import userData from './routes/userData.js';
import bankRates from './routes/bankRates.js';
import loanTypes from './routes/loanTypes.js'
import bankRatesName from './routes/bankRatesName.js'

dotenv.config({
    path: './.env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("MongoDB connection failed !!! ", err);
    })

// Use the user data route
app.use('/api/v1/loan', userData);

// Use the bank rates route
app.use('/api/v1/bankrates', bankRates);

// Use the loan types route
app.use('/api/v1/loantypes', loanTypes);

// Use the bank rates name route
app.use('/api/v1/bankratesname', bankRatesName);