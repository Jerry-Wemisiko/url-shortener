/**
 * Custom Express error handling middleware
 * Catches errors thrown from async routes or middlewares
 */

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode).json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};

module.exports = errorHandler;