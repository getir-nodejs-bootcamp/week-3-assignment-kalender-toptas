const { v4: uuidv4 }  = require('uuid');
const db              = require('../db/database');

async function getUsers(req, res, next) {
  try {
    const users = db;
  
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users
      }
    });
  } catch (err) {
    next(err);
  }
}

async function getUser(req, res, next) {
  try {
    const { id } = req.params;
  
    const user = db.find(user => user.id == id);
  
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

async function createUser(req, res, next) {
  try {
    const { body } = req;
    
    const newUser = {
      id        : uuidv4(),
      name      : body.name,
      username  : body.username,
      email     : body.email
    }
    
    db.push(newUser);
    
    res.status(201).json({
      status: 'success',
      data: {
        user: newUser
      }
    });
  } catch (err) {
    next(err);
  }
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

async function deleteUser(req, res, next) {
  try {
    const { id } = req.params;
  
    const index = db.findIndex(user => user.id == id);

    db.splice(index, 1);
  
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}