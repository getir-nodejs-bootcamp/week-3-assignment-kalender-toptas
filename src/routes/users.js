const router  = require('express').Router();

const {
  verifyAuth,
  validate
}             = require('../middlewares');

const {
  signUp,
  logIn
}             = require('../controllers/auth');

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}             = require('../controllers/users');

const {
  signUpSchema,
  logInSchema
}             = require('../validators');

router.route('/sign-up')
  .post(validate(signUpSchema, 'body'), signUp)

router.route('/log-in')
  .post(validate(logInSchema, 'body'), logIn)

router.route('/')
  .get(verifyAuth, getUsers)
  .post(verifyAuth, createUser)

router.route('/:id')
  .get(verifyAuth, getUser)
  .patch(verifyAuth, updateUser)
  .put(verifyAuth, updateUser)
  .delete(verifyAuth, deleteUser)

module.exports = router;