const User = require('../models/user.model');
const { faker } = require('@faker-js/faker');
const paginate = require('../utils/paginate');

// ✅ Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    
    const { page, limit, skip } = paginate(req);

    const users = await User.find()
    .sort({ _id: -1 })
    .skip(skip)
    .limit(limit);

    const formattedUsers = users.map(user => ({
      id: user._id,
      fullName: user.name,
      email: user.email,
      age: user.age,
      status: 'active',
      password:  user.password, // Include password for demonstration purposes
    }))

    const filteredUsers = formattedUsers.filter(user => user.age >= 18);

    res.status(200).json({
      message: '✅ Users fetched successfully!',
      page,
      limit,
      count: filteredUsers.length,
      users: filteredUsers
    });
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
      age: faker.number.int({ min: 18, max: 60 }),
      password: faker.internet.password(12, false, /[a-zA-Z0-9!@#$%^&*()_+]/), // Strong password
    });
  }

  return users;
}

// Bulk insert controller
exports.bulkInsertUsers = async (req, res, next) => {
  try {
    const users = generateUsers(500000);
    await User.insertMany(users);
    res.status(201).json({ message: '✅ 5,00,000 users inserted successfully!' });
  } catch (error) {
    next(error); // pass to global handler
  }
};