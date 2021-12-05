const { v4: uuidv4 }  = require('uuid');
const db              = require('../db/database');

class UserService {
  save(user) {
    user.id = uuidv4();
    
    db.push(user);
    
    return user;
  }

  findByEmail(email) {
    const user = db.find(user => user.email === email);
    
    return user;
  }

  findById(id) {
    const user = db.find(user => user.id === id);
    
    return user;
  }
}

module.exports = new UserService();