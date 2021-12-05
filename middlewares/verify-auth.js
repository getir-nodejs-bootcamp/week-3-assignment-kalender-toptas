const jwt             = require('jsonwebtoken');
const { 
  AppError,
}                     = require('../utils');
const { userService } = require('../services');

function verifyAuth(req, _, next) {
  const { authorization } = req.headers;
  console.log('authorization => ', authorization)

  if (
    !authorization ||
    !(authorization.split(' ')[0] === 'Bearer') ||
    !authorization.split(' ')[1]
  ) {
    return next(new AppError('Unauthorized request. Please log in.', 401));
  }

  const token = authorization.split(' ')[1];
  console.log('token => ', token);

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log('decoded => ', decoded);

  const user = userService.findById(decoded.id);
  console.log('user => ', user);

  if(!user) {
    return next(new AppError('The user belonging to this token is no longer existent.', 401));
  }

  req.user = user;
  next();
}

module.exports = verifyAuth;