const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { userValidationRules } = require('../middlewares/validators/user.validator');
const { validateRequest } = require('../middlewares/validationMiddleware');

// 🧼 Clean and readable route
router.post(
  '/user',
  userValidationRules,
  validateRequest,
  userController.createUser
);

router.post('/bulk-insert', userController.bulkInsertUsers);

router.get('/', (req, res) => {
  res.send('User route working!');
});

router.get('/user-list', userController.getAllUsers);

module.exports = router;
