const User = require('../models/user.model');
const { faker } = require('@faker-js/faker');

// ✅ Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ _id: -1 }).limit(100); // limit to 100 users for now
    res.status(200).json(users);
  } catch (error) {
    console.error('❌ Failed to fetch users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};


exports.createUser = async (req, res, next) => {
  try {
    const { name, email, age } = req.body;

    // Check for duplicate email
    const exists = await User.findOne({ email });
    if (exists) {
      const error = new Error('Email already exists');
      error.status = 409; // Conflict
      return next(error); // ⬅️ pass to global handler
    }

    const newUser = await User.create({ name, email, age });
    res.status(201).json(newUser);
  } catch (error) {
    next(error); // ⬅️ pass unexpected errors to global handler
  }
};


// Generate dummy users
function generateUsers(count) {
  const users = [];

  for (let i = 0; i < count; i++) {
    users.push({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 60 })
    });
  }

  return users;
}

// Bulk insert controller
exports.bulkInsertUsers = async (req, res) => {
  try {
    const users = generateUsers(50000);
    await User.insertMany(users);
    res.status(201).json({ message: '✅ 50,000 users inserted successfully!' });
  } catch (error) {
    next(error); // pass to global handler
  }
};