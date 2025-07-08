const express = require('express');
const { applySecurityMiddleware } = require('./middlewares/security');
const rateLimiter = require('./config/rateLimit');
const routes = require('./routes');
const logger = require('./middlewares/logger');
const { errorHandler, notFound } = require('./middlewares/errorHandler');

const app = express();

// Security and Rate Limiting
applySecurityMiddleware(app);
app.use(rateLimiter);

// Core middlewares
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api', routes);

// Error handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
