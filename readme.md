# RupeeMantra Backend

This is the backend API for RupeeMantra, a service handling loan applications, bank rates, and loan types. It is built using Node.js with Express, MongoDB for the database, and follows a modular structure for controllers, models, routes, and middleware.

## Table of Contents

- [Project Setup](#project-setup)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Project Setup

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/rupeemantra-backend.git
   cd rupeemantra-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file based on the `.env.sample` and fill in the required values:
   ```bash
   cp .env.sample .env
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   This will start the backend on `http://localhost:8000/`.

5. **Run in production:**
   ```bash
   npm start
   ```

## Environment Variables

Ensure you configure the following environment variables in your `.env` file:

- `PORT` - Port number for the server
- `MONGO_URI` - MongoDB connection string
- `NODE_ENV` - The environment mode, e.g., `development`, `production`

## Project Structure

The project is structured as follows:

```
├── node_modules
├── public
│   └── temp                   # Temporary files
├── src
│   ├── controllers             # Handles the logic for each route
│   │   ├── userData.controller.js
│   ├── db                      # MongoDB connection setup
│   │   └── index.js
│   ├── middlewares             # Custom middleware
│   ├── models                  # Database models
│   │   ├── bankRate.model.js
│   │   ├── bankRatesName.model.js
│   │   ├── loanTypes.model.js
│   │   └── userData.model.js
│   ├── routes                  # Defines API routes
│   │   ├── bankRates.js
│   │   ├── bankRatesName.js
│   │   ├── loanTypes.js
│   │   └── userData.js
│   ├── utils                   # Utility functions and constants
│   ├── app.js                  # Express app setup
│   └── constants.js            # Constants
├── .env                        # Environment configuration
├── .gitignore                  # Git ignored files
├── package.json                # Project dependencies and scripts
├── README.md                   # Documentation
└── ...

```

## API Endpoints

### User Data Endpoints

- **POST /loan** - Submit a loan application.
- **POST /addUserData** - Create a new user data entry.

### Bank Rates Endpoints

- **POST /addBankRate** - Insert a new bank rate.
- **GET /fetchAllBanksRates** - Fetch all bank rates.

### Loan Types Endpoints

- **POST /addLoanTypes** - Insert a new loan type.
- **GET /fetchAllLoanTypes** - Fetch all loan types.

### Bank Rates Name Endpoints

- **POST /addBankName** - Insert a new bank name.
- **GET /fetchAllBankNames** - Fetch all bank names.

## Technologies Used

- **Node.js** with **Express** - Server-side JavaScript
- **MongoDB** - NoSQL database
- **Mongoose** - Object Data Modeling (ODM) library for MongoDB
- **Dotenv** - Load environment variables
- **Nodemon** - Development server with automatic restart
- **Prettier/ESLint** - Code formatting and linting tools

---