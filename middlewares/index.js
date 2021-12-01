const authorizationChecker  = require('./authorization-checker');
const requestLogger         = require('./request-logger');
const errorHandler          = require('./error-handler');

module.exports = {
  authorizationChecker,
  requestLogger,
  errorHandler
}