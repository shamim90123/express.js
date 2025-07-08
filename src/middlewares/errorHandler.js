// Global error handler
const errorHandler = (err, res) => {
  console.error('❌ Global Error:', err);

  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Something went wrong',
  });
};

// 404 Not Found handler
const notFound = (res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
};

module.exports = { errorHandler, notFound };
