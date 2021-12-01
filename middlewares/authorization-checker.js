const { BEARER_TOKEN } = require('../config');

function authorizationChecker(req, _, next) {
  if (req.token !== BEARER_TOKEN) {
    throw new Error('Unauthorized request.');
  }

  next();
}

module.exports = authorizationChecker;