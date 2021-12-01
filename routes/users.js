const router  = require('express').Router();

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}             = require('../controllers/users');

router.route('/')
  .get(getUsers)
  .post(createUser)

router.route('/:id')
  .get(getUser)
  .patch(updateUser)
  .put(updateUser)
  .delete(deleteUser)

module.exports = router;