const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/bulk-insert', userController.bulkInsertUsers);

router.get('/', (req, res) => {
  res.send('User route working!');
});

router.get('/user-list', userController.getAllUsers);

module.exports = router;
