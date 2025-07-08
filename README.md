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

<pre> project-root/ ├── src/ │ ├── app.js # Main Express config │ ├── server.js # Start server │ ├── config/ │ │ └── db.js # MongoDB connection config │ ├── routes/ │ │ └── user.routes.js # User route definitions │ ├── controllers/ │ │ └── user.controller.js # Route logic (CRUD, bulk insert) │ ├── models/ │ │ └── user.model.js # Mongoose schema/model │ ├── middlewares/ │ │ ├── logger.js # Request logger │ │ ├── errorHandler.js # Global error + 404 handler │ │ ├── validationMiddleware.js # Middleware to check validation result │ │ └── validators/ │ │ └── user.validator.js # Validation rules (express-validator) ├── .env # Environment variables ├── .gitignore # Files/folders to ignore in Git ├── package.json # Dependencies & scripts └── README.md # Project info & documentation </pre>


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
