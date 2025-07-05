const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { userValidationRules } = require('../middlewares/validators/user.validator');
const { validateRequest } = require('../middlewares/validationMiddleware');

router.post('/', userValidationRules, validateRequest, userController.createUser);
router.get('/', userController.getAllUsers);
router.post('/bulk', userController.bulkInsertUsers);

module.exports = router;
