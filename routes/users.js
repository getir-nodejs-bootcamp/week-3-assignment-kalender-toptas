const router  = require('express').Router();

const {
  verifyAuth
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

router.route('/sign-up')
  .post(signUp)

router.route('/log-in')
  .post(logIn)

router.route('/')
  .get(verifyAuth, getUsers)
  .post(createUser)

router.route('/:id')
  .get(getUser)
  .patch(updateUser)
  .put(updateUser)
  .delete(deleteUser)

module.exports = router;