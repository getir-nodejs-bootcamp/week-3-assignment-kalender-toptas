const db              = require('../db/database');
const { userService } = require('../services');

async function getUsers(_, res) {
  const users = db;

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users
    }
  });
}

async function getUser(req, res) {
  const { id } = req.params;

  const user = userService.findById(id);

  res.status(200).json({
    status: 'success',
    data: {
      user
    }
  });
}

async function createUser(req, res) {
  const { data } = req;
  
  const user = userService.save(data);
  
  res.status(201).json({
    status: 'success',
    data: {
      user
    }
  });
}

async function updateUser(req, res, next) {
  const { id }            = req.params;
  const { body, method }  = req;

  let user;

  if (method === 'PATCH') user = userService.findByIdAndPatch(id, data)
  else user = userService.findByIdAndPut(id, data)
  
  res.status(200).json({
    status: 'success',
    data: {
      user
    }
  });
}

async function deleteUser(req, res) {
  const { id } = req.params;

  userService.deleteById(id);

  res.status(204).json({
    status: 'success',
    data: null
  });
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}