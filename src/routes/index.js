const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth.middleware');

const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');
// const productRoutes = require('./product.routes');

// Grouped and modular
router.use('/users', protect, userRoutes);
router.use('/auth', authRoutes);
// router.use('/products', productRoutes);

module.exports = router;
