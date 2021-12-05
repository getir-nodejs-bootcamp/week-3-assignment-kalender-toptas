const jwt             = require('jsonwebtoken');
const { userService } = require('../services');
const { 
  sanitize,
  validate,
  AppError
}                     = require('../utils');

async function signUp(req, res, next) {
  const { body }    = req;
  const data        = sanitize(body, ['email', 'password', 'username']);
  const isDataValid = validate(data, ['email', 'password']);

  if (!isDataValid) return next(new AppError('Please prove an email and password to sign up.', 400));

  const user  = userService.save(data);
  const JWT   = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  
  res.status(201).json({
    status: 'success',
    token: JWT,
    data: {
      user
    }
  });
}

async function logIn(req, res, next) {
  const { email, password } = req.body;
  const data                = sanitize(body, ['email', 'password']);
  const isDataValid         = validate(data, ['email', 'password']);

  if (!isDataValid) return next(new AppError('Please prove an email and password to log in.', 400));

  const user = userService.findById(email);
  
  if (!user || !(user.password === password)) return next(new AppError('Invalid email or password.', 400));

  const JWT = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

  res.status(200).json({
    status: 'success',
    token: JWT,
    data: {
      user
    }
  });
}

module.exports = {
  signUp,
  logIn
}