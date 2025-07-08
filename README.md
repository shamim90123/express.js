# 🚀 Express.js REST API Boilerplate

A scalable and secure Express.js REST API starter built with best practices.

---

## 📦 Features Implemented

### ✅ Core Features
- CRUD for `User` model using MongoDB + Mongoose
- Bulk insert with Faker.js (50,000 users)
- Data validation using `express-validator`
- Global error and 404 handlers
- Logger middleware

### 🔐 Security & Performance
- `helmet` — Secure HTTP headers
- `cors` — Enable Cross-Origin Requests
- `rate-limit` — API rate limiting per IP
- `express.json()` and `express.urlencoded()` for parsing requests

### ⚙️ Developer Experience
- Environment config via `.env`
- Proper folder structure (routes, controllers, middlewares, config)
- Clean modular codebase
- Logging middleware

---

## 📂 Folder Structure
```
project-root/
├── src/
│   ├── app.js                  # Main Express app configuration
│   ├── server.js               # Server bootstrap file
│   ├── routes/
│   │   └── user.routes.js      # User-related API routes
│   ├── controllers/
│   │   └── user.controller.js  # Business logic for user routes
│   ├── models/
│   │   └── user.model.js       # Mongoose schema/model
│   ├── middlewares/
│   │   ├── logger.js               # Custom request logger
│   │   ├── errorHandler.js         # Global & 404 error handlers
│   │   ├── validationMiddleware.js # Common validation handling
│   │   └── validators/
│   │       └── user.validator.js  # express-validator rules
│   └── config/
│       └── db.js              # MongoDB connection setup
├── .env                       # Environment variables
├── .gitignore                 # Git ignore file
├── package.json               # Project metadata & dependencies
└── README.md                  # Project documentation
```


---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv
- express-validator
- helmet, cors, express-rate-limit
- faker.js

---

## 🧪 API Endpoints

| Method | Endpoint            | Description                |
|--------|---------------------|----------------------------|
| GET    | `/api/users/`       | Test user route            |
| POST   | `/api/users/user`   | Create user (with validation) |
| POST   | `/api/users/bulk-insert` | Bulk insert 50k users |
| GET    | `/api/users/user-list` | Get list of users (limit 100) |

---

## 🚀 Getting Started

### 1. Clone the repository

```
git clone https://github.com/shamim90123/express.js.git
cd express.js
```

2. Install dependencies

```
npm install
```

3. Create .env file

PORT=3000
MONGO_URI=mongodb://localhost:27017/express_app
JWT_SECRET=yourStrongSecretKey
```
node server.js
```