const { body } = require('express-validator');

exports.userValidationRules = [
  body('name')
    .notEmpty()
    .withMessage('Name is required'),
  body('email')
    .isEmail()
    .withMessage('Valid email is required'),
  body('age')
    .isInt({ min: 18 })
    .withMessage('Age must be at least 18'),
];
