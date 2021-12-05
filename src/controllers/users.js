const { v4: uuidv4 }  = require('uuid');
const db              = require('../db/database');
const { userService } = require('../services');

async function getUsers(req, res, next) {
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
  try {
    const { body, method }  = req;
    const { id }            = req.params;
    const validFields       = ['name', 'username', 'email'];
  
    /* Sanitize Body Payload */
    for (let key of Object.keys(body)) {
      const isFieldValid = validFields.includes(key);
      if (!isFieldValid) {
        delete body[key];
      }
    }
  
    const index = db.findIndex(user => user.id == id);
    let user    = db.find(user => user.id == id);
  
    if (method === 'PATCH') {
      for (let key in body) {
        user[key] = body[key];
      }
    } else {
      user = {
        id: user.id,
        ...body,
      }
    }
  
    db.splice(index, 1, user);
  
    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (err) {
    next(err);
  }
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