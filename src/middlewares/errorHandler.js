// Global error handler
const errorHandler = (err, req, res, next) => {
  console.error('❌ Global Error:', err);

  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Something went wrong',
  });
};

// 404 Not Found handler
const notFound = (req, res, next) => {
  res.status(404).json({ success: false, message: 'Route not found' });
};

module.exports = { errorHandler, notFound };
