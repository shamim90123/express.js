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

project-root/
│
├── src/
│ ├── app.js # Main express config
│ ├── server.js # Start server
│ ├── routes/
│ │ └── user.routes.js
│ ├── controllers/
│ │ └── user.controller.js
│ ├── models/
│ │ └── user.model.js
│ ├── middlewares/
│ │ ├── logger.js
│ │ ├── errorHandler.js
│ │ ├── validationMiddleware.js
│ │ └── validators/
│ │ └── user.validator.js
│ └── config/
│ └── db.js
│
├── .env
├── .gitignore
├── package.json
└── README.md


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

```bash
git clone https://github.com/your-username/express-api-boilerplate.git
cd express-api-boilerplate

2. Install dependencies

`npm install`

3. Create .env file

PORT=3000
MONGO_URI=mongodb://localhost:27017/express_app
JWT_SECRET=yourStrongSecretKey

node server.js
