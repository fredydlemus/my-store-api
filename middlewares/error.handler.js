const {ValidationError} = require('sequelize');
const boom = require('@hapi/boom');

function logErrors(error, req, res, next) {
  console.log("logErrors");
  console.error(error);
  next(error); // pass the error to the next error middleware
}

function errorHandler(error, req, res, next) {
  console.log("errorHandler");
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

function boomErrorHandler(error, req, res, next) {
  if (error.isBoom) {
    const { output } = error;
    res.status(output.statusCode).json(output.payload);
  }else{
    next(error);
  }
  
}

function ormErrorHandler(error, req, res, next) {
  if (error instanceof ValidationError){
    res.status(409).json({
      statusCode: 409,
      message: error.name,
      errors: error.errors,
    });
  }
  next(error);
}

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
};
