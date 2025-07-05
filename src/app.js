const express = require('express');
const routes = require('./routes'); // Automatically loads all routes
const logger = require('./middlewares/logger');
const { errorHandler, notFound } = require('./middlewares/errorHandler');

const app = express();

app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api', routes);

// 404 & Global error handlers
app.use(notFound);
app.use(errorHandler);

module.exports = app;
